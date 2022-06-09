import { Route, Routes, useSearchParams, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./pages/home/Home";
import CreateTrip from "./pages/create-trip/CreateTrip";
import UserList from "./pages/user-list/UserList";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";

function App() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const isToken = localStorage.getItem("adminKey");

	if (!isToken) {
		localStorage.setItem("adminKey", searchParams.get("token"));
	}

	Axios.interceptors.request.use(
		function (config) {
			const userAuthData = localStorage.getItem("adminKey");
			if (userAuthData) {
				const parsedAuth = JSON.parse(userAuthData);
				config.headers.Authorization = "Bearer " + parsedAuth.token;
			}
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	Axios.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			if (error.response) {
				if (error.response.status == 401) {
					navigate("/login");
					localStorage.removeItem("auth");
					toast.error(error.response.data.message);
				}
			}
			return Promise.reject(error);
		}
	);

	useLayoutEffect(() => {
		navigate("/");
	}, []);

	return (
		<div>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="create-trip" element={<CreateTrip />} />
					<Route path="user-list" element={<UserList />} />
				</Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
