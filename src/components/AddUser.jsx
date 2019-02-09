import React, { Component } from 'react'

class AddUser extends Component {
    state = {
        name: null,
        age: null,
        gender: null
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
            age,
            gender
        } = this.state;

        /* Creates a new object with user's data */
        // Previously we were trying to
        // update UsersList state with AddUser state, which created a bug
        this.props.addUser({
            name,
            age,
            gender
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>

                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>

                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" onChange={this.handleChange}></input>

                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default AddUser;