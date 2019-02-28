import React from "react";
import "./MessageList.css";
import Message from "./Message";

const MessageList = ({ messages }) => {

	return (
		<div className="MessageList">
			{ !messages.length && <h2>No messages yet...</h2>}
			{
				!!messages.length && messages.map(({ user, msg }, id) => (
				<Message key={id} user={user} msg={msg} />
			))
			}
		</div>
	);
};

export default MessageList;
