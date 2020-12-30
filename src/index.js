import * as serviceWorker from './serviceWorker';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetworkApp from './App';

ReactDOM.render(<SocialNetworkApp/>, document.getElementById('root'));

serviceWorker.unregister();