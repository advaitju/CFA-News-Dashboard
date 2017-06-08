import React, { Component } from 'react';
import Filter from './components/Filter/Filter';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: '',
			articles: ''
		}
	}

	componentWillMount() {
		// const sources = fetch('https://newsapi.org/v1/sources?language=en', {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// })
		// .then().then(function(response) {
		// 	return response.json();
		// })
		//
		// if (sources.status == 'ok') {
		// 	this.state.sources = sources.sources;
		// } else {
		// 	this.state.sources = false;
		// }
	}

  render() {
    return (
      <div className="App">
				<Filter sources={this.sources} articles={this.articles} />
      </div>
    );
  }
}

export default App;
