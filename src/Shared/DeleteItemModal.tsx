import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { db } from "../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { portfolio } from "./types";

interface Props {
	show: boolean;
	setShow: (show: boolean) => void;
	setPorts: React.Dispatch<React.SetStateAction<portfolio[]>>;
	itemId: string;
}
const DeleteItemModal = ({ show, setShow, itemId, setPorts }: Props) => {
	const deletePort = async () => {
		try {
			await deleteDoc(doc(db, "portfolios", itemId)).then(() => {
				toast.success("doc deleted successfully");
			});
			setPorts((prev) => [...prev.filter((port) => port.id !== itemId)]);
		} catch (err) {
			console.log("err", err);
		}
	};
	return (
		<>
			<Modal
				show={show}
				size="sm"
				onClose={() => {
					setShow(false);
				}}
				popup>
				<Modal.Header className="bg-primary-white" />
				<Modal.Body className="bg-primary-white">
					<div className="text-center ">
						<HiOutlineExclamationCircle className="mx-auto mb-4 text-gray-700 h-14 w-14 dark:text-gray-700" />
						<h3 className="mb-5 text-lg font-normal text-gray-700 dark:text-gray-700">
							Are you sure you want to delete this portfolio?
						</h3>
						<div className="flex justify-center gap-4">
							<Button
								color="failure"
								onClick={() => {
									deletePort();
								}}>
								{"Yes, I'm sure"}
							</Button>
							<Button
								color="gray"
								onClick={() => {
									setShow(false);
								}}>
								No, cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default DeleteItemModal;
