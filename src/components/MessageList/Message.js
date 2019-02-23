import React from "react";

const Message = ({ user, msg }) => {
	return (
		<article className="message">
			<div className="message-header">
				<p>{user}</p>
			</div>
			<div className="message-body">{msg}</div>
		</article>
	);
};

export default Message;
