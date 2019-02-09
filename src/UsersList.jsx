import React, { Component } from 'react';

import Users from './components/Users';
import AddUser from './components/AddUser';
import './styles/Users.css'

class UsersList extends Component {

    state = {
        users: [
            { name: 'Ryu', age: 30, gender: 'male', id: 1 },
            { name: 'Yoshi', age: 20, gender: 'male', id: 2 },
            { name: 'Crystal', age: 40, gender: 'female', id: 3 }
        ]
    }

    getRandomUniqueID() {
        let id;
        id = Math.floor(Math.random() * 10000);
        /*do {
            id = Math.floor(Math.random() * 1000);
        // eslint-disable-next-line
        } while (false && this.state.users.filter(user => user.id === id).length);*/

        return id;
    }

    addUser = (user) => {
        user.id = this.getRandomUniqueID();
        
        const users = [...this.state.users, user];
        
        this.setState({
            users
        });

        this.props.userAdded(user);
    }

    deleteUser = (id) => {
        const users = this.state.users.filter(user => {
            return user.id !== id;
        });
        this.setState({
            users
        });
    }

    render() {
        return (
            <div className="users-list-container">
                <h1>Users List</h1>
                <Users users={this.state.users} deleteUser={this.deleteUser} />
                <AddUser addUser={this.addUser} />
            </div>
        );
    }
}

export default UsersList;