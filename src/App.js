import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './components/home_page';
import LoginForm from './components/login_form';
import MatchList from './containers/match_list';
import MessageBoard from './components/message_board';
import Stats from './containers/stats';
import UserForm from './components/user_form';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user)=> {
      
        if (user) {
          this.setState({currentUser: user});
        }      
    });
  }

  render() {
    const { currentUser } = this.state;
    
    return (
      <BrowserRouter>
        <div id="main">
          <Navbar />
          <Switch>
            <Route exact path="/messages/:id" 
              render={ () => 
                currentUser ? (<MessageBoard/>) : (<Redirect to="/login" /> )
              } 
            />

            <Route exact path="/matches"
              render={() =>
                currentUser ? (<MatchList />) : (<Redirect to="/login" />)
              }
            />

            <Route exact path="/stats" 
              render={ () => 
                currentUser ? (<Stats/>) : (<Redirect to="/login" />)
              }
            />

            <Route exact path="/user"
              render={() =>
                currentUser ? (<UserForm />) : (<Redirect to="/login" />)
              }
            />
            

            <Route exact path="/login" 
              render={() =>
                currentUser ? (<Redirect to="/user" />) : (<LoginForm />)
              } 
            />

            <Route exact path="/"
              render={() => 
                currentUser ? (<HomePage />) : (<Redirect to="/login" />)
              }
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);