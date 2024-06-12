import { db } from "../firebase-config";
import { collection, addDoc, getDocs, getDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { singleResponseObject } from "../Shared/types";
import toast from "react-hot-toast";

export const firebaseActions = {
	addData: async (data: singleResponseObject, collectionName: string) => {
		try {
			await addDoc(collection(db, collectionName), {
				...data,
			});
			toast.success("successfully added");
			return true;
		} catch (err: any) {
			toast.error("Error adding document: ", err);
			return false;
		}
	},
	getData: async (collectionName: string) => {
		try {
			const snapshot = await getDocs(collection(db, collectionName));
			const data: singleResponseObject[] = [];
			snapshot.forEach((doc) => {
				data.push({ id: doc.id, ...doc.data() } as singleResponseObject);
			});
			return data;
		} catch (err) {
			toast.error("error getting item ");
			console.log("err", err);
		}
	},
	getSingle: async (collectionName: string, docId: string) => {
		const snapshot = await getDoc(doc(db, collectionName, docId));
		return snapshot.data() as singleResponseObject;
	},
	updateSingle: async (collectionName: string, data: singleResponseObject, docId: string) => {
		try {
			await setDoc(doc(db, collectionName, docId), {
				...data,
			});
			return true;
		} catch (err) {
			console.error("Error adding document: ", err);
			return false;
		}
	},
	deleteSingle: async (collectionName: string, itemId: string, setNewData: React.Dispatch<React.SetStateAction<singleResponseObject[]>>) => {
		try {
			await deleteDoc(doc(db, collectionName, itemId)).then(() => {
				toast.success("doc deleted successfully");
			});
			setNewData((prev) => [...prev.filter((port) => port.id !== itemId)]);
		} catch (err) {
			console.log("err", err);
		}
	},
};
