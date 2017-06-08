import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import 'jquery-match-height';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

$(document).ready(function(){
	$('.col-md-6.col-lg-4').matchHeight();
});
