import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import Order from './components/order';
import allReducers from './reducers/';
import './styles/style.css';

const store = createStore(allReducers);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/order" component={Order}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root')
);