import React from "react";

const Modal = ({ onSubmit, onChange }) => {
	return (
		<div className="modal is-active">
			<div className="modal-background" />
			<div className="modal-content">
				<form onSubmit={onSubmit} className="box">
					<h2>Enter your name</h2>
					<div className="columns">
						<div className="column">
							<input
								type="text"
								className="input"
								autoFocus
								onChange={onChange}
							/>
						</div>
						<div className="column">
							<button type="submit" className="button">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
