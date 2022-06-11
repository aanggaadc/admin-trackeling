import React from "react";
import LogoUnauth from "./trackeling-unathorized.png";
import Logo from "../../trackling.png";
import { CLIENT_URL } from "../../config/url";
import "./Unauthorization.scss";

function Unauthorization() {
	return (
		<div className="container-fluid">
			<div className="top">
				<div className="logo-img">
					<img src={Logo} alt="" style={{ width: "15rem" }} />
				</div>
				<div className="description">
					<h1 className="text-center">
						THIS PAGE IS ONLY FOR <span className="fw-bold admin">ADMIN</span>!
					</h1>
				</div>
			</div>
			<div className="logo-unauth">
				<img src={LogoUnauth} alt="" style={{ width: "36rem" }} className="img-fluid" />
			</div>
			<div className="login-link">
				<div className="paragraph">are you admin?</div>
				<a href={`${CLIENT_URL}/login-admin`} className="login-btn">
					click here
				</a>
			</div>
		</div>
	);
}

export default Unauthorization;
