import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Stor from './redux/store'

ReactDOM.render(
<Provider store={Stor}>
    <App />
</Provider> 
, document.getElementById('root'));

