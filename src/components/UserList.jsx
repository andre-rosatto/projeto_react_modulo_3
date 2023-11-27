import React from 'react';
import User from "./User";

import '../css/UserList.css';

export default function UserList({ users, setSelectedUser }) {
	return (
		<ul>{
			users.map(user => {
				return <User user={user} setSelectedUser={setSelectedUser} key={user.id} />
			})
		}</ul>
	);
}