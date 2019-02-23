import React from "react";
import "./OnlineList.css";

const OnlineList = ({ users }) => {
	return (
		<div className="OnlineList box">
			{users.map((user, id) => (
				<div key={id}>
					<span className="tag is-light is-medium">{user}</span>
				</div>
			))}
		</div>
	);
};

export default OnlineList;
