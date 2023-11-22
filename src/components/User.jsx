import React from 'react';

export default function User({ user, setSelectedUser }) {
	return (
		<li>
			<img src={'../assets/profile_pics/' + user.pic} alt={'Imagem de perfil de ' + user.name} />
			<div className='info'>
				<p>{user.name}</p>
				<div className='id-wrapper'>
					<p className='id'>ID: {user.id}</p>
					<p>Username: {user.username}</p>
				</div>
			</div>
			<button onClick={() => setSelectedUser(user)}>Pagar</button>
		</li>
	);
}