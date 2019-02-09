import React from 'react';

const Users = ({ users, deleteUser }) => {    
    const userList = users.map(user => {
        return user.age > 20 ? (
            <div className="user" key={user.id}>
                <ul>
                    <li><strong>Name:</strong> {user.name}</li>
                    <li><strong>Age:</strong> {user.age}</li>
                    <li><strong>Gender:</strong> {user.gender}</li>
                </ul>
                <button onClick={() => deleteUser(user.id)}>
                    Delete
                </button>
            </div>
        ) : null;
    });

    return (
        <div className="user-list">
            {userList}
        </div>
    )
}

export default Users;