import React from 'react';
import ModalHeader from './ModalHeader';

import '../css/Modals.css';

export default function PayResponseModal({ payResponse, setPayResponse }) {
	return (
		<div className='modal-bg'>
			<div className='modal-window'>
				<ModalHeader handleClose={() => { setPayResponse(null) }}>
					Recibo de pagamento
				</ModalHeader>
				<p>O pagamento {payResponse === 'fail' ? <strong>não</strong> : ''} foi concluído com sucesso.</p>
			</div>
		</div>
	);
}