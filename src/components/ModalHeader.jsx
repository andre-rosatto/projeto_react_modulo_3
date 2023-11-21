import React from "react";

import '../css/Modals.css';

export default function ModalHeader({ title, handleClose }) {
	return (
		<header>
			<div>{title}</div>
			<button onClick={handleClose}>X</button>
		</header>
	);

}