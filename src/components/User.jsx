import React from 'react';

import '../css/User.css';

export default function User({ user, setSelectedUser }) {
	return (
		<li className='User'>
			<img src={'../assets/profile_pics/' + user.pic} alt={'Imagem de perfil de ' + user.name} />
			<div className='User__info'>
				<p>{user.name}</p>
				<div className='User__id-wrapper'>
					<p className='User__id'>ID: {user.id}</p>
					<p>Username: {user.username}</p>
				</div>
			</div>
			<button onClick={() => setSelectedUser(user)}>Pagar</button>
		</li>
	);
}