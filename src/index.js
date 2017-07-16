import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js';
import 'jquery-match-height/dist/jquery.matchHeight-min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// $(document).ready(function(){
// 	$('.col-md-6.col-lg-4').matchHeight();
// });
