import React from "react";
import "./MessageList.css";
import Message from "./Message";

const MessageList = ({ messages }) => {
	return (
		<div className="MessageList">
			{messages.map(({ user, msg }, id) => (
				<Message key={id} user={user} msg={msg} />
			))}
		</div>
	);
};

export default MessageList;
