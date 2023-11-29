import React from 'react';

import '../css/Modal.css';

export default function Modal(props) {
	return (
		<div className='modal-bg'>
			<div className='modal-window'>
				<header>
					<div>{props.header}</div>
					<button onClick={props.handleModalClose}>X</button>
				</header>
				{props.children}
			</div>
		</div>
	);
}