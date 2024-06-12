import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { BiImageAdd } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import BackButton from "../../Shared/BackButton";
import { portfolio, successStory } from "../../Shared/types";
import ReactQuill from "react-quill";
import { Progress } from "flowbite-react";
import { firebaseActions } from "../../API";
import useFileUpload from "../../Hooks/useFileUpload";
import { useNavigate } from "react-router-dom";



function AddSuccessStory() {
    const { register, handleSubmit, reset, control } = useForm<successStory>();
    const [bio, setBio] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const {
        progress: imageProgress,
        loading: imageLoading,
        uploadedFiles: images,
        handleFileChange: handleImageChange
    } = useFileUpload("KBA_SUCCESS_STORIES"
    );


    const submitForm = async (data: successStory) => {
        setLoading(true);
        const profileUrl = images.length > 0 ? images[0].url : "";

        const added = await firebaseActions.addData({
            ...data,
            image: profileUrl,
            story: bio,
        }, 'successStories')
            .catch((err) => {
                console.log("err", err);
                toast.error("Upload failed");
            })
            .finally(() => {
                setLoading(false);

            });

        if (added) {
            reset();
            setBio('')
            navigate(-1)
            toast.success("Added Success story !!");
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
                <p className="font-bold text-center">Add Success Story</p>
                <div >
                    <div >
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
                                htmlFor="worksAt"
                                className="block my-2 text-xs font-semibold text-gray-700 ">
                                Current Employment
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
                            <ReactQuill theme="snow" value={bio} onChange={setBio} />
                        </div>
                    </div>
                    <div >
                        <div>
                            <div>
                                <label
                                    htmlFor="image"
                                    className="border-1 cursor-pointer border-orange-900 gap-4 bg-orange-50 p-2 rounded-[4px] flex items-center my-2 text-xs font-semibold text-gray-700 ">
                                    <BiImageAdd className="text-2xl" />
                                    <p>
                                        {images && images.length !== 0
                                            ? "Change picture"
                                            : "Upload Profile"}
                                    </p>
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

export default AddSuccessStory;
