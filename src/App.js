import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Navbar and dropbox
import Navbar from './components/Navbar'
//import DropBox from './components/DropBox';

// Sections/routes
import Home from './components/home/Home'
import UsersList from './components/users/UsersList';
import TodoList from './components/todo/TodoList'
import Buttons from './Buttons'
import Posts from './components/home/Posts'

class App extends Component {
  componentDidMount() {
    // fired one time when component was mounted
    /* console.log('component mounted'); */
  }

  userAdded(user) {
    console.log('User added!', user);
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>

          {/* Main content */}
          <main>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/users" component={UsersList} /> */}
            <Route exact
              path='/users'
              render={(props) => <UsersList {...props} userAdded={this.userAdded} />} />
            <Route path="/todo" component={TodoList} />
            <Route path="/buttons" component={Buttons} />
            <Route exact path="/:post_id([0-9]+)" component={Posts} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
