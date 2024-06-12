import { motion } from "framer-motion";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "../../Shared/Logo";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
// import axios from "axios";

interface userLogin {
	email: string;
	password: string;
}

const Login = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm<userLogin>()
	const [loading, setLoading] = useState<boolean>(false);
	const [loadingGoogle, setLoadingGoogle] = useState<boolean>(false)
	const auth = getAuth();
	const signInWithGoogle = async () => {
		setLoadingGoogle(true);
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
				setLoadingGoogle(false);
			});
	};
	const signIn = async (data: userLogin) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
			toast.success("Login Successfully!!!");
			navigate("/dashboard");
		}).catch(() => {
			toast.error("Login Failed!!!");
			navigate("/admin");
		})
			.finally(() => {
				setLoading(false);
			});
	}

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

				<form onSubmit={handleSubmit(signIn)} className="w-4/5 mx-auto ">
					<div>
						<label
							htmlFor="email"
							className="block my-2 text-xs font-semibold text-gray-700 ">
							Email
						</label>
						<input
							type="email"
							className="w-full px-3 py-1 border border-gray-500 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							id="email"
							{...register("email")}
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block my-2 text-xs font-semibold text-gray-700 ">
							Password
						</label>
						<input
							type="password"
							className="w-full px-3 py-1 border border-gray-500 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
							id="password"
							{...register("password")}
						/>
					</div>


					<button
						disabled={loading}
						type="submit"
						className={` bg-light-chocolate  w-full py-2 mt-3 text-sm font-semibold text-center rounded-md ${!loading
							? " text-white bg-theme-yellow"
							: " text-yellow-700 bg-[#E4F1FE]"
							}`}>
						{!loading ? (
							"Login"
						) : (
							<HashLoader color="#FFF" loading={loading} size={15} />
						)}
					</button>

				</form>
				<p className='my-2 text-center'>Or</p>
				<button
					disabled={loadingGoogle}
					type="button"
					onClick={signInWithGoogle}
					className="w-full py-2 mt-2 text-sm font-semibold text-center text-yellow-700 rounded-md "
				>
					{!loadingGoogle ? (
						"Instant Login with KBA Admin account"
					) : (
						<HashLoader color="#432010" loading={loadingGoogle} size={15} />
					)}
				</button>
			</div>
		</motion.div>
	);
};

export default Login;
