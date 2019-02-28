import React from "react";

const InputBar = ({ onSubmit, onChange, value }) => {
	return (
		<form onSubmit={onSubmit}>
			<input type="text" className=" input" onChange={onChange} value={value} autoFocus />
			<button type="submit" className=" button is-primary">
				send
			</button>
		</form>
	);
};

export default InputBar;
