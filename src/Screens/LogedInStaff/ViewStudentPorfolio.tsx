import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { BiImageAdd } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import BackButton from "../../Shared/BackButton";
import { portfolio } from "../../Shared/types";
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

function ViewStudentPortfolio() {
	const { id } = useParams();
	const { register, handleSubmit, reset, control, setValue } = useForm<portfolio>();
	const [, setPortfolio] = useState<portfolio>();
	const [images, setImages] = useState<UploadedFile[]>([]);
	const [cvs, setCvs] = useState<UploadedFile[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [bio, setBio] = useState<string>("")
	const navigate = useNavigate()

	const {
		progress: imageProgress,
		loading: imageLoading,
		uploadedFiles: uploadedImages,
		handleFileChange: handleImageChange,
	} = useFileUpload(
		"KBA_DOCS"
	);

	const {
		progress: pdfProgress,
		loading: pdfLoading,
		uploadedFiles: uploadedCvs,
		handleFileChange: handlePdfChange,
	} = useFileUpload("KBA_DOCS",
	);

	useEffect(() => {
		setImages(uploadedImages);
	}, [uploadedImages]);

	useEffect(() => {
		setCvs(uploadedCvs);
	}, [uploadedCvs]);

	const submitForm = async (data: portfolio) => {
		const profileUrl = images.length > 0 ? images[0].url : "";
		const cvUrl = cvs.length > 0 ? cvs[0].url : "";
		setLoading(true);
		const added = await firebaseActions.updateSingle(
			"portfolios",
			{
				...data,
				profile: profileUrl,
				cv: cvUrl,
			},
			id as string
		).finally(() => {
			setLoading(false);
			reset();
			navigate(-1)
			toast.success("Portfolio updated successfully!");
		});

		if (!added) {
			console.log("Error updating portfolio");
		}
	};

	useEffect(() => {
		async function fetchData() {
			const port = (await firebaseActions.getSingle("portfolios", id as string)) as portfolio;
			if (port) {
				setPortfolio(port);
				setValue("names", port.names);
				setValue("phone", port.phone);
				setValue("email", port.email);
				setBio(port.bio)
				if (port.profile) {
					setImages([{ name: port.names, data: port.profile, url: port.profile }]);
				}
				if (port.cv) {
					setCvs([{ name: `${port.names}_CV`, url: port.cv as string, data: port.cv as string }]);
				}
			}
		}
		fetchData();
	}, [id, setValue]);

	return (
		<div>
			<BackButton />
			<form
				className="w-11/12 mx-auto md:w-1/3 bg-white p-4 rounded-[4px] shadow-md"
				onSubmit={handleSubmit(submitForm)}
			>
				<p className="font-bold text-center">Edit Portfolio Details</p>
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
					<label htmlFor="phone" className="block my-2 text-xs font-semibold text-gray-700">
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
					<label htmlFor="email" className="block my-2 text-xs font-semibold text-gray-700">
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
						Story
					</label>
					<ReactQuill theme="snow" value={bio} onChange={setBio} />
				</div>
				<div>
					<div>
						<p className="my-2 text-xs font-semibold text-gray-700">Profile</p>
						<label
							htmlFor="profile"
							className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700"
						>
							<BiImageAdd className="text-2xl" />
							<p>{images && images.length !== 0 ? "Change picture" : "Upload Profile"}</p>
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
				<div>
					<div>
						<label
							htmlFor="cv"
							className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700"
						>
							<FaFilePdf className="text-2xl" />
							<p>{cvs && cvs.length !== 0 ? "Change document" : "Upload CV"}</p>
						</label>
						<Controller
							name="cv"
							control={control}
							render={({ field }) => (
								<input
									type="file"
									id="cv"
									accept="application/pdf"
									onChange={(e) => {
										field.onChange(e);
										handlePdfChange(e);
									}}
									style={{ display: "none" }}
								/>
							)}
						/>
					</div>
					<div className="flex justify-center">
						{cvs && cvs.length > 0 ? (
							cvs.map((cv) => (
								<a key={crypto.randomUUID()} href={cv.url} target="_blank" rel="noopener noreferrer">
									<FaFilePdf className="text-4xl text-red-600" />
									<p className="text-center">{cv.name}</p>
								</a>
							))
						) : (
							<p className="font-bold">No CV uploaded</p>
						)}
					</div>
					<div className="w-100">
						{pdfLoading && (
							<Progress
								progress={pdfProgress}
								textLabel="uploading"
								size="lg"
								labelProgress
								labelText
								color="teal"
							/>
						)}
					</div>
				</div>
				<div className="flex ">
					<button
						type="submit"
						className="px-4 py-2 w-full md:w-1/3 mt-4 font-bold text-white bg-light-chocolate rounded-[8px]  focus:outline-none focus:shadow-outline"
					>
						{loading ? "Submitting..." : "Submit"}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ViewStudentPortfolio;
