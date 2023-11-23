import React from 'react';

import '../css/Modals.css';
import ModalHeader from './ModalHeader';

export default function PayOptionsModal({ user, setSelectedUser, cards, handlePay }) {
	const getCardLastDigits = (card) => {
		return card.card_number.substring(card.card_number.length - 4);
	}

	const getRawValue = (value) => {
		let result = value.match(/[0-9]+/g) ?? ['0'];
		return parseFloat(result.join('')) / 100;
	}

	const onInputChange = (event) => {
		let rawValue = getRawValue(event.target.value);
		event.target.value = rawValue === 0 ? '' : new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(rawValue);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const value = getRawValue(document.querySelector('form input').value);
		const cardIdx = document.querySelector('#card-select').value;
		handlePay(user, value, cardIdx);
	}

	return (
		<div className='modal-bg'>
			<div className='modal-window'>
				<ModalHeader handleClose={() => setSelectedUser(null)}>
					Pagamento para <span>{user.name}</span>
				</ModalHeader>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='value'
						placeholder='R$ 0,00'
						required
						onInput={onInputChange}
					/>
					<select id='card-select'>{
						cards.map((card, idx) => { return <option key={card.card_number} value={idx}>{'Cartão com final ' + getCardLastDigits(card)}</option> })
					}</select>
					<button
						type='submit'
					>Pagar</button>
				</form>
			</div>
		</div>
	);
}

// <header>
// 					<div>Pagamento para <span>{user.name}</span></div>
// 					<button onClick={() => { setSelectedUser(null) }}>X</button>
// 				</header>