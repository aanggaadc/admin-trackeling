import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../utils/auth";

function PrivateRoutes() {
	const authData = useAuth();

	return authData ? <Outlet /> : <Navigate to={"/unauthorized"} />;
}

export default PrivateRoutes;
