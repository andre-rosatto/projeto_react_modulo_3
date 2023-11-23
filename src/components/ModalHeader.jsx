import React from "react";

import '../css/Modals.css';

export default function ModalHeader({ handleClose, children }) {
	return (
		<header>
			<div>{children}</div>
			<button onClick={handleClose}>X</button>
		</header>
	);

}