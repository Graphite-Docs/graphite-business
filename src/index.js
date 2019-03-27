import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './styles/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


setGlobal({
    organization: {},
    documents: [], 
    files: [],
    forms: [],
    teams: []
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
