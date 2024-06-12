import { useEffect, useState } from "react";
import { singleResponseObject, successStory } from "../../Shared/types";
import { Link, useNavigate } from "react-router-dom";
import DeleteItemModal from "../../Shared/DeleteItemModal";
import { useAuth } from "../../Context/AuthContext";
import { IoAddCircle } from "react-icons/io5";
import { firebaseActions } from "../../API";
import parse from "html-react-parser";
import { getThefirstFiveSentences } from "../../helpers";
import SuccessStory from "./SuccessStory";


function AllSuccessStories() {
    const navigate = useNavigate();
    const { authenticated } = useAuth();
    const [successStories, setSuccessStories] = useState<singleResponseObject[]>([]);
    const [show, setShow] = useState<boolean>(false);
    const [itemId, setItemId] = useState<string>("");
    useEffect(() => {
        async function fetchData() {
            const data = await firebaseActions.getData('successStories');
            setSuccessStories(data as successStory[]);
        }
        fetchData();
    }, [successStories]);

    return (
        <div className="p-3  mx-auto min-h-[80vh]">
            {!authenticated ? null : (
                <Link
                    className="flex items-center gap-2  mb-4 rounded-[4px] shadow-lg p-2 text-sm text-white w-fit bg-light-chocolate"
                    to="add">
                    <IoAddCircle className="text-2xl" />
                    <p>Add Success Story</p>
                </Link>
            )}
            {!authenticated ? (
                <p className="my-3 text-xl font-bold text-center text-light-chocolate">
                    {" "}
                    Highlighted Success Stories{" "}
                </p>
            ) : null}
            <div className="grid  gap-4 rounded-b-[4px]">
                {successStories &&
                    successStories.length !== 0 &&
                    successStories.map((story) => (
                        <SuccessStory story={story} key={story.id} setShow={setShow} setItemId={setItemId} />
                    ))}
            </div>
            {successStories && successStories.length !== 0 && (
                <DeleteItemModal
                    setPorts={setSuccessStories}
                    itemId={itemId}
                    show={show}
                    setShow={setShow}
                    collectionName='successStories'
                />
            )}
        </div>
    );
}

export default AllSuccessStories;
