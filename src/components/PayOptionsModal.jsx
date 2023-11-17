import React from 'react';

import '../css/Modals.css';

export default function PayOptionsModal({ user, setSelectedUser, cards }) {
	const getCardLastDigits = (card) => {
		return card.card_number.substring(card.card_number.length - 4);
	}

	const getRawValue = (value) => {
		let result = value.match(/[0-9]+/g) ?? ['0'];
		return parseFloat(result.join('')) / 100;
	}

	const onInputChange = (event) => {
		let rawValue = getRawValue(event.target.value);
		console.log(rawValue);
		event.target.value = rawValue === 0 ? '' : new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(rawValue);
	}

	return (
		<div className='modal-bg'>
			<div className='modal-window'>
				<header>
					<div>Pagamento para <span>{user.name}</span></div>
					<button onClick={() => { setSelectedUser(null) }}>X</button>
				</header>
				<form>
					<input
						type='text'
						name='value'
						placeholder='R$ 0,00'
						required
						onInput={onInputChange}
					/>
					<select>{
						cards.map(card => { return <option key={card.card_number}>{'Cartão com final ' + getCardLastDigits(card)}</option> })
					}</select>
					<button>Pagar</button>
				</form>
			</div>
		</div>
	);
}