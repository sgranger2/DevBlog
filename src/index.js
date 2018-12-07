import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
                <Route path="/DevBlog" component={App} />
        </BrowserRouter>, document.getElementById('root')
);

serviceWorker.register();
