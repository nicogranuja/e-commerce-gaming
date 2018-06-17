import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './configureStore';
import MuiThemeProvider from  '@material-ui/core/styles/MuiThemeProvider'


const mainStore = configureStore();


ReactDOM.render(

    <MuiThemeProvider>
    <Provider store={mainStore}>
        <App/>
    </Provider>,
     </MuiThemeProvider>,


    document.getElementById('root')
);
registerServiceWorker();
