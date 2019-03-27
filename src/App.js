import React, { Component } from 'reactn';
import { BrowserRouter, Route } from 'react-router-dom';
import Organization from './components/organization/Organization';
import Documents from './components/documents/Documents';
import Invites from './components/invites/Invites';
import SignIn from './components/shared/SignIn';
import Loading from './components/shared/Loading';

import { User } from 'radiks';

import 'semantic-ui-css/semantic.min.css'
import './styles/App.css';

const blockstack = require('blockstack');

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('GROUP_MEMBERSHIPS_STORAGE_KEY')) {
      console.log("Radiks user")
    } else {
      if(blockstack.isUserSignedIn()) {
        // await User.createWithCurrentUser();
      }
    }
 
    if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn().then(async (userData) => {
        window.location = window.location.origin;
      });
    }
  }

  render() {
    return (
      <div>
        {blockstack.isUserSignedIn() ? 
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Documents} />
            <Route exact path='/settings' component={Organization} />
          </div>
        </BrowserRouter> : 
          
        window.location.href.includes('?authResponse') ? 
        <Loading /> : 
          
        <BrowserRouter>
          <div>
            <Route exact path='/invite/:id' component={Invites} />
            <Route exact path='/' component={SignIn} />
            <Route exact path='/?auth=' component={Loading} />
            <Route exact path="/:id" component={SignIn} />
          </div>
        </BrowserRouter> 
        }
        
      </div>
    );
  }
}

export default App;
