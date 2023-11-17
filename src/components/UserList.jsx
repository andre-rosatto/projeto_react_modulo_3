import React from 'react';

import '../css/UserList.css';
import User from "./User";

export default function UserList({ users, setSelectedUser }) {
	return (
		<ul>{
			users.map(user => {
				return <User user={user} setSelectedUser={setSelectedUser} key={user.id} />
			})
		}</ul>
	);
}