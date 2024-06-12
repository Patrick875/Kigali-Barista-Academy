import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Screens/Home";
import KsbaAcademy from "./Screens/KsbaAcademy";
import KsbaCatering from "./Screens/KsbaCatering";
import Contactus from "./Screens/Contactus";
import Layout from "./Shared/Layout";
import ScrollRestoration from "./Shared/ScrollRestoration";
import AllStudentPortfolios from "./Screens/LogedInStaff/AllStudentPortfolios";
import { Toaster } from "react-hot-toast";
import Login from "./Screens/LogedInStaff/Login";
import ViewStudentPorfolio from "./Screens/LogedInStaff/ViewStudentPorfolio";
import AddStudentPortfolio from "./Screens/LogedInStaff/AddStudentPortfolio";
import DashboardLayout from "./Screens/LogedInStaff/DashboardLayout";
import StudentPortfolio from "./Screens/LogedInStaff/StudentPortfolio";
import AuthRoute from "./Shared/AuthRoute";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { AuthProvider } from "./Context/AuthContext";
import "react-quill/dist/quill.snow.css";
import Page404 from "./Shared/Page404";
import SuccessStories from "./Screens/SuccessStories";
import AllSuccessStories from "./Screens/LogedInStaff/AllSuccessStories";
import AddSuccessStory from "./Screens/LogedInStaff/AddSuccessStory";
import ViewSuccessStory from "./Screens/LogedInStaff/ViewSuccessStory";
import SuccessStoryReadMore from "./Screens/LogedInStaff/SuccessStoryReadMore";

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
	return (
		<AuthProvider>
			<>
				<AnimatePresence mode="wait">
					<ScrollRestoration />
					<Toaster
						position="top-center"
						toastOptions={{
							duration: 5000,
						}}
					/>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path="ksbacademy" element={<KsbaAcademy />} />
							<Route path="ksbcatering" element={<KsbaCatering />} />
							<Route path="contactus" element={<Contactus />} />
							<Route path="students" element={<AllStudentPortfolios />} />
							<Route path="success-stories" element={<SuccessStories />} />
							<Route path="students/:id" element={<StudentPortfolio />} />
						</Route>
						<Route path="/admin" element={<Login />} />
						<Route
							path="dashboard"
							element={
								<AuthRoute>
									<DashboardLayout />
								</AuthRoute>
							}>
							<Route index element={<AllStudentPortfolios />} />
							<Route path="student/:id" element={<ViewStudentPorfolio />} />
							<Route path="student/add" element={<AddStudentPortfolio />} />
							<Route path="success-stories" >
								<Route index element={<AllSuccessStories />} />
								<Route path='add' element={<AddSuccessStory />} />
								<Route path=':id' element={<SuccessStoryReadMore />} />
								<Route path=':id/update' element={<ViewSuccessStory />} />
							</Route>
						</Route>
						<Route path="*" element={<Page404 />} />
					</Routes>
				</AnimatePresence>
			</>
		</AuthProvider>
	);
}

export default App;
