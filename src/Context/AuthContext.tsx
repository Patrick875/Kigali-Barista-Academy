import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
interface props {
	children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider = ({ children }: props) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);

	return (
		<AuthContext.Provider value={{ authenticated, setAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
