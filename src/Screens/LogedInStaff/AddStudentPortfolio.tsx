import { ChangeEvent, useState } from "react";
import { db } from "../../firebase-config"; // Ensure Firebase is configured
import { collection, addDoc } from "firebase/firestore";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { BiImageAdd } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import BackButton from "../../Shared/BackButton";
import { portfolio } from "../../Shared/types";
import ReactQuill from "react-quill";
import axios, { AxiosProgressEvent, AxiosRequestConfig } from "axios";
import { Progress } from "flowbite-react";

interface FileObject {
	name: string;
	url: string
}
interface UploadedFile extends FileObject {
	data?: string;
}

async function addDataToFireStore(port: portfolio) {
	try {
		const docRef = await addDoc(collection(db, "portfolios"), {
			...port,
		});
		console.log("Document written with ID: ", docRef.id);
		return true;
	} catch (err) {
		console.error("Error adding document: ", err);
		return false;
	}
}

function AddStudentPortfolio() {
	const { register, handleSubmit, reset, control } = useForm<portfolio>();
	const [bio, setBio] = useState("");
	const [images, setImages] = useState<UploadedFile[]>([]);
	const [cvs, setCvs] = useState<UploadedFile[]>([]);
	const [loading, setLoading] = useState(false);
	const [imageUploading, setImagesUploading] = useState(false);
	const [pdfUploading, setPdfUploading] = useState(false);
	const [progress, setProgress] = useState<number>(0);

	const uploadToCloudinary = async (file: File, fieldName: string) => {
		let result: string = "";
		const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_APP_NAME
			}/image/upload`;
		const formData = new FormData();
		formData.append("file", file);
		formData.append("folder", "KBA_DOCS");
		formData.append("upload_preset", "ae7sn532");

		const config: AxiosRequestConfig = {
			onUploadProgress: (progressEvent: AxiosProgressEvent) => {
				const completedUpload = Math.round(
					(progressEvent.loaded / (progressEvent.total ? progressEvent.total : 100)) * 100
				);
				setProgress(() => completedUpload);
			},
		};

		if (fieldName === "profile") {
			setImagesUploading(true);
		} else {
			setPdfUploading(true);
		}
		await axios
			.post(url, formData, config)
			.then((res) => {
				console.log("res", res);
				result = res.data.secure_url;
			})
			.catch((err) => {
				console.log("errroror", err);
			});

		setImagesUploading(false);
		setPdfUploading(false);

		return result;
	};

	const handleFileChange = async (
		e: ChangeEvent<HTMLInputElement>,
		fieldName: string
	) => {
		const files = e.target.files;
		let filesArray: FileObject[] = [];
		if (files) {
			filesArray = await Promise.all(
				Array.from(files).map(async (file) => {
					const url = await uploadToCloudinary(file, fieldName);
					return {
						name: file.name,
						url: url,
					};
				})
			);
		}

		if (fieldName === "profile") {
			setImages(filesArray);
		} else if (fieldName === "cv") {
			setCvs(filesArray);
		}
	};

	const submitForm = async (data: portfolio) => {
		setLoading(true);
		const profileUrl = images.length > 0 ? images[0].url : "";
		const cvUrl = cvs.length > 0 ? cvs[0].url : "";

		const added = await addDataToFireStore({
			...data,
			profile: profileUrl,
			bio: bio,
			cv: cvUrl,
		})
			.catch((err) => {
				console.log("err", err);
				toast.error("Upload failed");
			})
			.finally(() => {
				setLoading(false);
			});

		if (added) {
			reset();
			setImages([]);
			setCvs([]);
			setBio("");
			toast.success("Added portfolio !!");
		} else {
			console.log("error");
		}
	};

	return (
		<div>
			<BackButton />
			<form
				className="w-11/12 mx-auto bg-white p-4 rounded-[4px] shadow-md"
				onSubmit={handleSubmit(submitForm)}>
				<p className="font-bold text-center">Add Portfolio Details</p>
				<div className="flex flex-col md:flex-row">
					<div className="w-full p-4 md:w-1/2">
						<div>
							<label
								htmlFor="names"
								className="block my-2 text-xs font-semibold text-gray-700 ">
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
							<label
								htmlFor="phone"
								className="block my-2 text-xs font-semibold text-gray-700 ">
								Phone
							</label>
							<input
								type="text"
								className="w-full px-3 py-1 border border-gray-500 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="phone"
								{...register("phone")}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block my-2 text-xs font-semibold text-gray-700 ">
								Email
							</label>
							<input
								type="text"
								className="w-full px-3 py-1 border border-gray-500 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="email"
								{...register("email")}
							/>
						</div>
						<div>
							<label
								htmlFor="bio"
								className="block my-2 text-xs font-semibold text-gray-700 ">
								Bio
							</label>
							<ReactQuill theme="snow" value={bio} onChange={setBio} />
						</div>
					</div>
					<div className="w-full p-4 md:w-1/2">
						<div>
							<div>
								<label
									htmlFor="profile"
									className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center  my-2 text-xs font-semibold text-gray-700 ">
									<BiImageAdd className="text-2xl" />
									<p>
										{images && images.length !== 0
											? "Change picture"
											: "Upload Profile"}
									</p>
								</label>
								<Controller
									name="profile"
									control={control}
									render={({ field }) => (
										<input
											type="file"
											id="profile"
											accept="image/*"
											onChange={(e) => {
												field.onChange(e);
												handleFileChange(e, "profile");
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
								{imageUploading && (
									<Progress
										progress={progress}
										textLabel="uploading"
										size="lg"
										labelProgress
										labelText
										color="teal"
									/>
								)}
							</div>
						</div>

						<div>
							<div>
								<label
									htmlFor="cv"
									className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center  my-2 text-xs font-semibold text-gray-700 ">
									<FaFilePdf className="text-2xl" />
									<p>
										{cvs && cvs.length !== 0 ? "Change document" : "Upload CV"}
									</p>
								</label>
								<Controller
									name="cv"
									control={control}
									render={({ field }) => (
										<div>
											<input
												type="file"
												id="cv"
												accept="application/pdf"
												onChange={(e) => {
													field.onChange(e);
													handleFileChange(e, "cv");
												}}
												style={{ display: "none" }}
											/>

											{field.value && (
												<p className="font-bold">{(field.value as File).name}</p>
											)}
										</div>
									)}
								/>
							</div>
							<div>
								{cvs && cvs.length !== 0 ? (
									cvs.map((cv) => (
										<div
											key={crypto.randomUUID()}
											className=" border-1 cursor-pointer  gap-4  p-2 rounded-[4px] flex items-center  my-2 text-xs font-semibold text-gray-700 ">
											<FaFilePdf className="text-2xl" />
											<p className="font-bold">{cv.name}</p>
										</div>
									))
								) : (
									<p className="font-bold">No file uploaded</p>
								)}
							</div>
							<div className="w-100">
								{pdfUploading && (
									<Progress
										progress={progress}
										textLabel="uploading"
										size="lg"
										labelProgress
										labelText
										color="teal"
									/>
								)}
							</div>
						</div>
					</div>
				</div>
				<button
					className="p-2 px-6 font-bold rounded-[4px]   mt-4 text-white bg-light-chocolate "
					type="submit">
					{loading ? "uploading ..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default AddStudentPortfolio;
