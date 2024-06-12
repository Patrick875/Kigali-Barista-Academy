import { useState } from "react";
import { db } from "../../firebase-config"; // Ensure Firebase is configured
import { collection, addDoc } from "firebase/firestore";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { BiImageAdd } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import BackButton from "../../Shared/BackButton";
import { portfolio } from "../../Shared/types";
import ReactQuill from "react-quill";
import { Progress } from "flowbite-react";
import { firebaseActions } from "../../API";
import useFileUpload from "../../Hooks/useFileUpload";
import { useNavigate } from "react-router-dom";



function AddStudentPortfolio() {
	const { register, handleSubmit, reset, control } = useForm<portfolio>();
	const [bio, setBio] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate()

	const {
		progress: imageProgress,
		loading: imageLoading,
		uploadedFiles: images,
		handleFileChange: handleImageChange
	} = useFileUpload("KBA_DOCS"
	);

	const {
		progress: pdfProgress,
		loading: pdfLoading,
		uploadedFiles: cvs,
		handleFileChange: handlePdfChange
	} = useFileUpload("KBA_DOCS"
	);

	const submitForm = async (data: portfolio) => {
		setLoading(true);
		const profileUrl = images.length > 0 ? images[0].url : "";
		const cvUrl = cvs.length > 0 ? cvs[0].url : "";

		const added = await firebaseActions.addData({
			...data,
			profile: profileUrl,
			bio: bio,
			cv: cvUrl,
		}, 'portfolios')
			.catch((err) => {
				console.log("err", err);
				toast.error("Upload failed");
			})
			.finally(() => {
				setLoading(false);
			});

		if (added) {
			reset();
			setBio("")
			navigate(-1)

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
									className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700 ">
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
									className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700 ">
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
													handlePdfChange(e);
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
											className=" border-1 cursor-pointer  gap-4  p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700 ">
											<FaFilePdf className="text-2xl" />
											<p className="font-bold">{cv.name}</p>
										</div>
									))
								) : (
									<p className="font-bold">No file uploaded</p>
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
					</div>
				</div>
				<button
					className="p-2 px-6 font-bold rounded-[4px] mt-4 text-white bg-light-chocolate "
					type="submit">
					{loading ? "uploading ..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default AddStudentPortfolio;
