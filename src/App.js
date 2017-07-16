import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import axios from 'axios';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableSources: [],
			fetchedSources: [],
			articles: []
		}
		this.apiSources = 'https://newsapi.org/v1/sources?';
		this.apiArticles = 'https://newsapi.org/v1/articles?';
		this.sourcesLanguage = 'en';
		this.apiKey = '1d4fef7aa6c44d9ea3ab179836a24b9a';
	}

	componentWillMount() {
		// GET sources
		axios({
			method: 'get',
			url: this.apiSources,
			responseType: 'json',
			params: {
				language: this.sourcesLanguage
			}
		})
		.then(response => {
			this.setState({ availableSources: response.data.sources });

			// GET articles
			// Must fetch articles separately for every source
			for (const [index, value] of response.data.sources.entries()) {
				if (index > 2) {
					break;
				}
				axios({
					method: 'get',
					url: this.apiArticles,
					responseType: 'json',
					params: {
						apiKey: this.apiKey,
						source: value.id
					}
				})
				.then(response => {
					// Append new set of articles
					this.setState({ articles: [...this.state.articles, response.data] });
					this.setState({ fetchedSources: [...this.state.fetchedSources, response.data.source]})
					console.log(this.state.articles);
					console.log(this.state.fetchedSources);
				})
				.catch(function (error) {
					console.log(`GET articles\n ${error}`);
				});
			}
		})
		.catch(function (error) {
			console.log(`GET sources\n ${error}`);
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
