import React from "react";

import '../css/User.css';

export default function User({ user, handlePay }) {
	return (
		<li className="User">
			<img src={'../assets/profile_pics/' + user.pic} alt={'imagem de perfil de ' + user.name} />
			<div className='User__info'>
				<p>Nome do usuário: <span>{user.name}</span></p>
				<div className="User__id-wrapper">
					<p className="User__id">ID: {user.id}</p>
					<p>Username: {user.username}</p>
				</div>
			</div>
			<button onClick={() => handlePay(user)}>Pagar</button>
		</li>
	);
}