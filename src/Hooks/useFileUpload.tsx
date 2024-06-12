import { useState } from "react";
import axios, { AxiosProgressEvent, AxiosRequestConfig } from "axios";

interface UploadedFile {
    name: string;
    url: string;
}

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_APP_NAME}/image/upload`;
const UPLOAD_PRESET = "ae7sn532";

const useFileUpload = (folder: string) => {
    const [progress, setProgress] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const uploadToCloudinary = async (file: File) => {
        let result: string = "";
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", folder);
        formData.append("upload_preset", UPLOAD_PRESET);

        const config: AxiosRequestConfig = {
            onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                const completedUpload = Math.round(
                    (progressEvent.loaded / (progressEvent.total ? progressEvent.total : 100)) * 100
                );
                setProgress(completedUpload);
            },
        };

        setLoading(true);
        try {
            const res = await axios.post(CLOUDINARY_URL, formData, config);
            result = res.data.secure_url;
            setUploadedFiles(() => [{ name: file.name, url: result }]);
        } catch (err) {
            console.error("Error uploading file", err);
        } finally {
            setLoading(false);
        }

        return result;
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            await Promise.all(Array.from(files).map(uploadToCloudinary));
        }
    };

    return { progress, loading, uploadedFiles, handleFileChange };
};

export default useFileUpload;
