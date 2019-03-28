import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './styles/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configure } from 'radiks';
import { UserSession } from 'blockstack'
import { appConfig } from './utils/config';

const userSession = new UserSession({ appConfig })

setGlobal({
    userSession,
    organization: {},
    documents: [], 
    files: [],
    forms: [],
    teams: []
})

configure({
    apiServer: 'https://wt-3fc6875d06541ef8d0e9ab2dfcf85d23-0.sandbox.auth0-extend.com/graphite-business-radiks',
    userSession
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
