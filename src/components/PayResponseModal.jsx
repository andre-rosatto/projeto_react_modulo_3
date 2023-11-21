import React from "react";
import ModalHeader from "./ModalHeader";

import '../css/Modals.css';

export default function PayResponseModal({ payResponse, setPayResponse }) {
	return (
		<div className='modal-bg'>
			<div className='modal-window'>
				<ModalHeader
					title={'Recibo de pagamento'}
					handleClose={() => { setPayResponse(null) }}
				/>
				<p>O pagamento {payResponse === 'fail' ? <strong>não</strong> : ''} foi concluído com sucesso.</p>
			</div>
		</div>
	);
}