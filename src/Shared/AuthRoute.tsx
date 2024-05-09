import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../Context/AuthContext";

interface authprops {
	children: ReactNode;
}

function AuthRoute({ children }: authprops) {
	const { authenticated, setAuthenticated } = useAuth();
	const auth = getAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setLoading(false);
				setAuthenticated(true);
			} else {
				console.log("unauthorized");
				navigate("/admin");
			}
		});

		return () => unsubscribe();
	}, [auth, navigate, setAuthenticated]);

	if (loading) return <p>Loading ....</p>;
	if (!authenticated) return null;

	return <>{children}</>;
}

export default AuthRoute;
