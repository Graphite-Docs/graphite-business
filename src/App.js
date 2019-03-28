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


class App extends Component {

  async componentDidMount() {
    const { userSession } = this.global;
    if(localStorage.getItem('GROUP_MEMBERSHIPS_STORAGE_KEY')) {
      console.log("Radiks user")
    } else {
      if(userSession.isUserSignedIn()) {
        await User.createWithCurrentUser();
      }
    }
 
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(async () => {
        window.location = window.location.origin;
      });
    }
  }

  render() {
    const { userSession } = this.global;
    return (
      <div>
        {userSession.isUserSignedIn() ? 
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
