import React, { Component } from 'react';

// To-do list
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoList extends Component {
    state = {
        todos: []
    }

    getTodos = () => {
        return new Promise((resolve, reject) => {

            /*fetch('http(s)://5c5eef023668970014fd1bce.mockapi.io/api/:endpoint')
                .then(resolve);*/

            resolve([
                { id: 1, content: 'wash' },
                { id: 2, content: 'eating' }
            ]);
        });
    }

    componentDidMount() {
        this.getTodos().then(todos => {
            this.setState({
                todos
            });
        });
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            todos
        });
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        const todos = [...this.state.todos, todo];
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's list</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo AddTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;