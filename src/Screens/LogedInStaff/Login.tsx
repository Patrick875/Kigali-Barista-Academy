import { motion } from "framer-motion";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../Shared/Logo";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);
	const auth = getAuth();
	const signInWithGoogle = async () => {
		setLoading(true);
		signInWithPopup(auth, new GoogleAuthProvider())
			.then(() => {
				toast.success("Login Successfully !!!");
				navigate("/dashboard");
			})
			.catch(() => {
				toast.error("Login Failed!!!");
				navigate("/admin");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			transition={{ duration: 0.8 }}
			animate={{ opacity: 1, x: 0 }}
			className="flex flex-col min-h-[100vh] bg-orange-50 justify-center basis-5/6">
			<div className="w-full mx-auto md:w-1/3">
				<div className="flex flex-col items-center justify-center gap-4">
					<Logo />
					<p className="capitalize">KSBA Student portfolio Portal</p>
				</div>

				<form className="w-4/5 mx-auto ">
					<button
						disabled={loading}
						type="button"
						onClick={signInWithGoogle}
						className={` bg-light-chocolate  w-full py-2 mt-3 text-sm font-semibold text-center rounded-md ${
							!loading
								? " text-white bg-theme-yellow"
								: " text-yellow-700 bg-[#E4F1FE]"
						}`}>
						{!loading ? (
							"Login with KBA gmail account"
						) : (
							<HashLoader color="#FFF" loading={loading} size={15} />
						)}
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Login;
