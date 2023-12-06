import React, { useEffect, useState } from 'react';

import '../css/App.css';
import Modal from './Modal';
import PayForm from './PayForm';
import UserList from './UserList';

export default function App() {
	const PROFILE_API = 'https://run.mocky.io/v3/6fd56137-9a2b-4109-8d3f-e10025ebe5f3';
	const CARDS_API = 'https://run.mocky.io/v3/97e3af7c-2644-4424-92d9-8564ede73a9b';
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

	return (
		<div className="App">
			<UserList users={userList} setSelectedUser={setSelectedUser} />

			{(selectedUser && !payResponse) && <Modal
				header={<>Pagamento para <span>{selectedUser.name}</span></>}
				handleModalClose={() => {
					setSelectedUser(null);
				}}
			>
				<PayForm
					user={selectedUser}
					setSelectedUser={setSelectedUser}
					cards={cardList}
					setPayResponse={setPayResponse}
				/>
			</Modal>}

			{payResponse && <Modal
				header={'Recibo de pagamento'}
				handleModalClose={() => {
					if (payResponse === 'success') {
						setSelectedUser(null);
					}
					setPayResponse(null);
				}}
			>
				<p>O pagamento {payResponse === 'fail' && <strong>não</strong>} foi concluído com sucesso.</p>
			</Modal>}
		</div>
	);
}