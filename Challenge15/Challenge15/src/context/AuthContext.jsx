import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	const login = () => setIsLoggedIn(true);

	const logout = () => setIsLoggedIn(false);

	return <AuthContext.Provider value={{ isLoggedIn, login, logout, user, setUser }}>{children}</AuthContext.Provider>;
};
