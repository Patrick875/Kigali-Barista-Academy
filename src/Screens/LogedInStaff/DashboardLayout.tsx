import { Outlet } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function DashboardLayout() {
	const auth = getAuth();

	return (
		<div className="min-h-[100vh] font-nunito">
			<nav className="h-[10vh] bg-light-chocolate text-white flex items-center ">
				<div className="flex items-center justify-between w-11/12 mx-auto">
					<p className="font-bold">
						KIGALI SPECIALIST BARISTA ACADEMY PORTFOLIO PORTAL
					</p>
					<button
						onClick={() => signOut(auth)}
						className="p-2 bg-white rounded-[4px] text-light-chocolate">
						Logout
					</button>
				</div>
			</nav>
			<div className="p-4 bg-slate-100 min-h-[90vh]">
				<Outlet />
			</div>
		</div>
	);
}

export default DashboardLayout;
