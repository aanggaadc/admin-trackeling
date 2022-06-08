import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchUsers from "../../components/search_users/SearchUsers";
import Sidebar from "../../components/sidebar/Sidebar";
import TableUsers from "../../components/table_users/TableUsers";
import "./userList.scss";

function UserList() {
	return (
		<div>
			<div className="userList">
				<Sidebar />
				<div className="userListContainer">
					<Navbar />
					<div className="title">USER LIST</div>
					<SearchUsers />
					<div className="tableContainer">
						<TableUsers />
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserList;
