import React from 'react';

const TRANSACTION_API = 'https://run.mocky.io/v3/798e4cad-64a8-4c92-8670-882e093899e5';

export default function PayForm({ user, setSelectedUser, cards, setPayResponse }) {
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

	const handlePay = (event) => {
		event.preventDefault();
		const value = getRawValue(document.querySelector('form input').value);
		const cardIdx = document.querySelector('#card-select').value;
		const card = cards[cardIdx];
		fetch(TRANSACTION_API, {
			method: "POST",
			body: JSON.stringify({
				card_number: card.card_number,
				cvv: card.cvv,
				expiry_date: card.expiry_date,
				destination_user_id: user.id,
				value: value
			})
		}
		).then(() => {
			if (cardIdx === '1') {
				throw (new Error('payment fail'));
			} else {
				setPayResponse('success');
			}
		}).catch(() => {
			setPayResponse('fail');
		});
	}

	return (
		<form onSubmit={handlePay}>
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
	);
}