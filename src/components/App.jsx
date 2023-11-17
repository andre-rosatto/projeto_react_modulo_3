import React, { useEffect, useState } from 'react';
import UserList from './UserList';

import '../css/App.css';

export default function App() {
	const PROFILE_API = 'https://run.mocky.io/v3/6fd56137-9a2b-4109-8d3f-e10025ebe5f3';
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		fetch(PROFILE_API)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(data => {
				setUserList(data);
			});
	}, []);

	function handlePay(user) {
		console.log(user);
	}

	return (
		<div className="App">
			<UserList users={userList} handlePay={handlePay} />
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