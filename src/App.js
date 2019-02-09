import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Navbar and dropbox
import Navbar from './components/Navbar'
import DropBox from './components/DropBox';

// Sections/routes
import UsersList from './UsersList';
import TodoList from './TodoList'
import Buttons from './Buttons'


class App extends Component {
  componentDidMount() {//fired one time when component was mounted
    console.log('component mounted');
  }

  userAdded(user) {
    console.log('User added!', user);
  }

  render() {
    const options1 = [{
      name: 'Home',
      link: '/home'
    }, {
      name: 'About',
      link: '/about'
    }];

    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>

          {/* Main content */}
          <main>
            <Route exact
              path='/'
              render={(props) => <UsersList {...props} userAdded={this.userAdded} />} />
            <Route path="/todo" component={TodoList} />
            <Route path="/buttons" component={Buttons} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
