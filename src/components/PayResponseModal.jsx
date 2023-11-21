import React from "react";

import '../css/Modals.css'

export default function PayResponseModal({ payResponse, setPayResponse }) {
	return (
		<div className='modal-bg'>
			<div className='modal-window'>
				<header>
					<div>Recido de pagamento</div>
					<button onClick={() => { setPayResponse(null) }}>X</button>
				</header>
				<p>O pagamento {payResponse === 'fail' ? <strong>não</strong> : ''} foi concluído com sucesso.</p>
			</div>
		</div>
	);
}