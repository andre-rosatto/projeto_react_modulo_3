import React, { useEffect, useState } from 'react';
import UserList from './UserList';

import '../css/App.css';
import PayOptionsModal from './PayOptionsModal';
import PayResponseModal from './PayResponseModal';

export default function App() {
	const PROFILE_API = 'https://run.mocky.io/v3/6fd56137-9a2b-4109-8d3f-e10025ebe5f3';
	const CARDS_API = 'https://run.mocky.io/v3/97e3af7c-2644-4424-92d9-8564ede73a9b';
	const TRANSACTION_API = 'https://run.mocky.io/v3/798e4cad-64a8-4c92-8670-882e093899e5';
	const [userList, setUserList] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [cardList, setCardList] = useState([]);
	const [payResponse, setPayResponse] = useState(null);

	useEffect(() => {
		fetch(PROFILE_API)
			.then(response => response.json())
			.then(json => setUserList(json));
		fetch(CARDS_API)
			.then(response => response.json())
			.then(json => setCardList(json));
	}, []);

	const handlePay = (user, value, cardIdx) => {
		const card = cardList[cardIdx];
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
			setSelectedUser(null);
			if (cardIdx === '1') {
				setPayResponse('fail');
			} else {
				setPayResponse('success');
			}
		});
	}

	return (
		<div className="App">
			<UserList users={userList} setSelectedUser={setSelectedUser} />
			{selectedUser && <PayOptionsModal user={selectedUser} setSelectedUser={setSelectedUser} cards={cardList} handlePay={handlePay}/>}
			{payResponse && <PayResponseModal payResponse={payResponse} setPayResponse={setPayResponse} />}
		</div>
	);
}

// userList
// [
// 	{
// 		"id": "817",
// 		"name": "Bianca Souza",
// 		"username": "@biancasouza",
// 		"pic": "biancasouza.jpg"
// 	}, {
// 		"id": "749",
// 		"name": "Marcos Cavalcanti",
// 		"username": "@marcoscavalcanti",
// 		"pic": "marcoscavalcanti.jpg"
// 	}, {
// 		"id": "245",
// 		"name": "Martim Santos",
// 		"username": "@martimsantos",
// 		"pic": "martimsantos.jpg"
// 	}
// ]

//cartões
// [
// 	{
// 	  "card_number": "4111111111111234",
// 	  "cvv": "123",
// 	  "expiry_date": "01/20"
// 	},
// 	{
// 	  "card_number": "1111111111111111",
// 	  "cvv": "789",
// 	  "expiry_date": "01/18"
// 	}
// ]

//payload
// {
// 	// Card Info
// 	card_number: string;
// 	cvv: number;
// 	expiry_date: string;
  
// 	// Destination User ID
// 	destination_user_id: number;
  
// 	// Value of the Transaction
// 	value: number;
//   }
  