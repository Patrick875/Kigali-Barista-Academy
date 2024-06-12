import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { BiImageAdd } from "react-icons/bi";
import BackButton from "../../Shared/BackButton";
import { successStory } from "../../Shared/types";
import { useNavigate, useParams } from "react-router-dom";
import { Progress } from "flowbite-react";
import { firebaseActions } from "../../API";
import useFileUpload from "../../Hooks/useFileUpload";
import ReactQuill from "react-quill";

interface FileObject {
    name: string;
    url: string;
}

interface UploadedFile extends FileObject {
    data?: string;
}

function ViewSuccessStory() {
    const { id } = useParams();
    const { register, handleSubmit, reset, control, setValue } = useForm<successStory>();
    const [, setSuccessStory] = useState<successStory>();
    const [images, setImages] = useState<UploadedFile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [story, setStory] = useState<string>('')
    const navigate = useNavigate()

    const {
        progress: imageProgress,
        loading: imageLoading,
        uploadedFiles: uploadedImages,
        handleFileChange: handleImageChange,
    } = useFileUpload(
        "KBA_SUCCESS_STORIES"
    );

    useEffect(() => {
        setImages(uploadedImages);
    }, [uploadedImages]);



    const submitForm = async (data: successStory) => {
        const imageUrl = images.length > 0 ? images[0].url : "";
        setLoading(true);
        const added = await firebaseActions.updateSingle(
            "successStories",
            {
                ...data,
                story,
                image: imageUrl,
            },
            id as string
        ).finally(() => {
            setLoading(false);
            reset();
            setStory('')
            setImages([])
            navigate(-1)
            toast.success("Success Story updated successfully!");
        });

        if (!added) {
            console.log("Error updating success story");
        }
    };

    useEffect(() => {
        async function fetchData() {
            const fetchedStory = (await firebaseActions.getSingle("successStories", id as string)) as successStory;
            if (fetchedStory) {
                setSuccessStory(fetchedStory);
                setValue("names", fetchedStory.names);
                setValue("worksAt", fetchedStory.worksAt);
                setStory(fetchedStory.story);

                if (fetchedStory.image) {
                    setImages([{ name: fetchedStory.names, data: fetchedStory.image, url: fetchedStory.image }]);
                }

            }
        }
        fetchData();
    }, [id, setValue]);

    return (
        <div>
            <BackButton />
            <form
                className="w-11/12 mx-auto  bg-white p-4 rounded-[4px] shadow-md"
                onSubmit={handleSubmit(submitForm)}
            >
                <p className="font-bold text-center">Edit Success Story </p>
                <div>
                    <label htmlFor="names" className="block my-2 text-xs font-semibold text-gray-700">
                        Names
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-1 border border-gray-500 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        id="names"
                        {...register("names")}
                    />
                </div>
                <div>
                    <label htmlFor="worksAt" className="block my-2 text-xs font-semibold text-gray-700">
                        Works At
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-1 border border-gray-500 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        id="worksAt"
                        {...register("worksAt")}
                    />
                </div>
                <div>
                    <label
                        htmlFor="bio"
                        className="block my-2 text-xs font-semibold text-gray-700 ">
                        Story
                    </label>
                    <ReactQuill theme="snow" value={story} onChange={setStory} />
                </div>
                <div>
                    <div>
                        <p className="my-2 text-xs font-semibold text-gray-700">Profile</p>
                        <label
                            htmlFor="image"
                            className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700"
                        >
                            <BiImageAdd className="text-2xl" />
                            <p>{images && images.length !== 0 ? "Change picture" : "Upload Profile"}</p>
                        </label>
                        <Controller
                            name="image"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={(e) => {
                                        field.onChange(e);
                                        handleImageChange(e);
                                    }}
                                    style={{ display: "none" }}
                                />
                            )}
                        />
                    </div>
                    <div className="flex justify-center">
                        {images && images.length > 0 ? (
                            images.map((img) => (
                                <img
                                    key={crypto.randomUUID()}
                                    src={img.url}
                                    alt={img.name}
                                    className="h-48 rounded-[8px]"
                                />
                            ))
                        ) : (
                            <p className="font-bold">No profile image added</p>
                        )}
                    </div>
                    <div className="w-100">
                        {imageLoading && (
                            <Progress
                                progress={imageProgress}
                                textLabel="uploading"
                                size="lg"
                                labelProgress
                                labelText
                                color="teal"
                            />
                        )}
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-bold text-white rounded-[6px] bg-light-chocolate md:w-1/3  focus:outline-none focus:shadow-outline"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ViewSuccessStory;
