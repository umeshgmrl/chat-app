import React from "react";

const InputBar = ({ onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<input type="text" className=" input" />
			<button type="submit" className=" button is-primary">
				send
			</button>
		</form>
	);
};

export default InputBar;
