import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { portfolio } from "../../Shared/types";
import { useEffect, useState } from "react";
import BackButton from "../../Shared/BackButton";
import parse from "html-react-parser";

function StudentPortfolio() {
	const { id } = useParams();
	const [portfolio, setPortfolio] = useState<portfolio>();

	const getPorts = async () => {
		const snapshot = await getDocs(collection(db, "portfolios"));
		const data: portfolio[] = [];
		snapshot.forEach((doc) => {
			data.push({ id: doc.id, ...doc.data() } as portfolio);
		});
		return data;
	};
	useEffect(() => {
		async function fetchData() {
			const data = await getPorts();
			const port = data.filter((port) => port.id === id);
			if (port && port.length !== 0) {
				setPortfolio(port[0]);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="w-11/12 p-3 mx-auto min-h-[80vh]">
			<BackButton />
			{portfolio ? (
				<div className="w-11/12 mx-auto flex md:flex-row gap-12 flex-col-reverse bg-white p-4 rounded-[4px] ">
					<div className="w-full md:w-2/3 ">
						<p className="mb-4 font-bold">Student Bio</p>
						<p>{parse(portfolio.bio)}</p>
					</div>
					<div className="w-full md:w-1/3 ">
						<img src={portfolio.profile} className="h-[30vh] rounded-[8px]" />
						<p className="mt-4 text-2xl font-bold text-center">
							{portfolio.names}
						</p>
						<p className="text-center capitalize ">Phone: {portfolio.phone}</p>
						<p className="text-center capitalize ">Email: {portfolio.email}</p>
						<a
							href={`${portfolio.cv}`}
							download={`${portfolio.names}_CV`}
							className="block py-1 rounded-[4px]  my-2 font-bold text-center text-white cursor-pointer bg-light-chocolate ">
							Download CV
						</a>
					</div>
				</div>
			) : (
				<div className="flex flex-col justify-center w-full">
					<p className="text-center text-light-chocolate"> Loading ....</p>
				</div>
			)}
		</div>
	);
}

export default StudentPortfolio;
