import React from "react";
import { CLIENT_URL } from "../../config/url";
import { toast } from "react-toastify";
import "./navbar.scss";

function Navbar() {
	const handleLogout = () => {
		toast.success("You are logged out");
		localStorage.removeItem("adminKey");
	};

	return (
		<div>
			<div className="navbar-custom">
				<div className="wrapper">
					<div className="items">
						<div className="item">admin</div>
						<div className="item">
							<a href={`${CLIENT_URL}/login-admin`} className="item-logout" onClick={handleLogout}>
								Logout
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
