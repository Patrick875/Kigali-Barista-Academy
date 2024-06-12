import { useEffect, useState } from "react";
import { portfolio, singleResponseObject } from "../../Shared/types";
import { Link, useNavigate } from "react-router-dom";
import DeleteItemModal from "../../Shared/DeleteItemModal";
import { useAuth } from "../../Context/AuthContext";
import { IoAddCircle } from "react-icons/io5";
import { firebaseActions } from "../../API";

function AllStudentPortfolios() {
	const navigate = useNavigate();
	const { authenticated } = useAuth();
	const [ports, setPorts] = useState<portfolio[]>([]);
	const [show, setShow] = useState<boolean>(false);
	const [itemId, setItemId] = useState<string>("");
	useEffect(() => {
		async function fetchData() {
			const data = await firebaseActions.getData('portfolios');
			setPorts(data as portfolio[]);
		}
		fetchData();
	}, [ports]);

	return (
		<div className="p-3  mx-auto min-h-[80vh]">
			{!authenticated ? null : (
				<Link
					className="flex items-center gap-2  mb-4 rounded-[4px] shadow-lg p-2 text-sm text-white w-fit bg-light-chocolate"
					to="student/add">
					<IoAddCircle className="text-2xl" />
					<p>Add Portfolio</p>
				</Link>
			)}
			{!authenticated ? (
				<p className="my-3 text-xl font-bold text-center text-light-chocolate">
					{" "}
					Highlighted Student Portfolios{" "}
				</p>
			) : null}
			<div className="grid md:grid-cols-4 gap-4 rounded-b-[4px]">
				{ports &&
					ports.length !== 0 &&
					ports.map((port: portfolio) => (
						<div
							key={port.id}
							className={`${authenticated ? "bg-white" : "bg-slate-100"}`}>
							<img
								key={crypto.randomUUID()}
								src={port.profile}
								onClick={() => navigate(`${port.id}`)}
								className="h-48 w-full cursor-pointer  rounded-t-[8px]"
							/>
							<p className="mt-2 font-bold text-center capitalize">
								{port.names}
							</p>
							<div className="flex flex-col items-center justify-center ">
								<a
									href={`${port.cv}`}
									download={`${port.names}_CV`}
									className="block my-2 font-bold text-gray-700 cursor-pointer ">
									<p>Download CV</p>
								</a>

								{!authenticated ? null : (
									<>
										<Link
											to={`student/${port.id}`}
											className="block my-2 font-bold cursor-pointer text-sky-700 ">
											<p>Update</p>
										</Link>

										<button
											onClick={() => {
												setItemId(port.id as string);
												setShow(true);
											}}
											className="text-pink-900">
											Delete
										</button>
									</>
								)}
							</div>
						</div>
					))}
			</div>
			{ports && ports.length !== 0 && (
				<DeleteItemModal
					setPorts={setPorts}
					itemId={itemId}
					show={show}
					setShow={setShow}
					collectionName="portfolios"
				/>
			)}
		</div>
	);
}

export default AllStudentPortfolios;
