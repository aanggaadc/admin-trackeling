import React from "react";
import "./navbar.scss";

function Navbar() {
	return (
		<div>
			<div className="navbar">
				<div className="wrapper">
					<div className="items">
						<div className="item">admin</div>
						<div className="item">Logout</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
