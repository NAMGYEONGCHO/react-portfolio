import React, { Component } from 'react';
import axios from 'axios'
import Users from './Users';
import AddUser from './AddUser';
import './Users.css'

class UsersList extends Component {

    state = {
        users: []
    }

    getRandomID() {
        const id = Math.floor(Math.random() * 10000);
        return id;
    }

    addUser = (user) => {
        user.id = this.getRandomID();

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
    componentDidMount() {
        //029 
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res);
                this.setState({
                    users: res.data
                })
            })
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