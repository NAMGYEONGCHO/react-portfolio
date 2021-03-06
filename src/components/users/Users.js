import React from 'react';

const Users = ({ users, deleteUser }) => {    
    const userList = users.map(user => {
        return (
            <div className="user" key={user.id}>
                <ul>
                    <li><strong>Name:</strong> {user.name}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Tel:</strong> {user.phone}</li>
                </ul>
                <button onClick={() => deleteUser(user.id)}>
                    Delete
                </button>
            </div>
        ) 
    });

    return (
        <div className="user-list">
            {userList}
        </div>
    )
}

export default Users;