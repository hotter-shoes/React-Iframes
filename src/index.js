import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

const tagManagerArgs = {
    gtmId: 'GTM-5NVDTF4'
}
TagManager.initialize(tagManagerArgs)
ReactGA.initialize('UA-145246937-1');
 


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
