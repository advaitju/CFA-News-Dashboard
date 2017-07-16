import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import axios from 'axios';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: '',
			articles: ''
		}
		this.apiSources = 'https://newsapi.org/v1/sources?language=en';
		this.apiArticles = 'https://newsapi.org/v1/articles?';
		this.apiKey = {
			apiKey: '1d4fef7aa6c44d9ea3ab179836a24b9a'
		};
	}

	componentWillMount() {
		// GET sources
		axios({
			method: 'get',
			url: this.apiSources,
			responseType: 'json'
		})
		.then(response => {
			this.setState({ sources: response.data.sources });
		})
		.catch(function (error) {
			console.log(error);
		});
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
