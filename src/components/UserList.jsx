import React from "react";

import '../css/UserList.css';
import User from "./User";

export default function UserList({ users, handlePay }) {
	return (
		<ul>{users.map(user => { return <User user={user} handlePay={handlePay} key={user.id} /> })}</ul>
	);
}

/* <li key={user.id}>
					<img src={'../assets/profile_pics/' + user.pic} alt={'imagem de perfil de ' + user.name} />
					<div className='info'>
						<p>Nome do usuário: {user.name}</p>
						<div className="info__id-wrapper">
							<p className="info__id">ID: {user.id}</p>
							<p>Username: {user.username}</p>
						</div>
					</div>
					<button onClick={() => handlePay(user)}>Pagar</button>
				</li> */