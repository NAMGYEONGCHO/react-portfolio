import React, { Component } from 'react'

class AddUser extends Component {
    state = {
        name: null,
        email: null,
        phone: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            email,
            phone
        } = this.state;

        /* Creates a new object with user's data */
        // Previously we were trying to
        // update UsersList state with AddUser state, which created a bug
        this.props.addUser({
            name,
            email,
            phone
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={this.handleChange}></input>

                    <label htmlFor="phone">Tel:</label>
                    <input type="text" id="phone" onChange={this.handleChange}></input>

                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default AddUser;