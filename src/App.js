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
			articles: [],
			loading: true
		}
		this.apiSources = 'https://newsapi.org/v1/sources?';
		this.apiArticles = 'https://newsapi.org/v1/articles?';
		this.sourcesLanguage = 'en';
		this.apiKey = '1d4fef7aa6c44d9ea3ab179836a24b9a';
		this.getArticles = this.getArticles.bind(this);
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
			this.getArticles([
				response.data.sources[0].id,
				response.data.sources[1].id,
				response.data.sources[2].id,
			]);
		})
		.catch(function (error) {
			console.log(`GET sources\n${error}`);
		});
	}

	getArticles(sources) {
		this.setState({loading: true});

		// GET articles for select sources
		// Filter out sources that have already been fetched
		for (const [index, value] of sources.entries()) {
			for (const [indexJ, valueJ] of this.state.fetchedSources.entries()) {
				if (value === valueJ.source) {
					sources.splice(index, 1);
				}
			}
		}
		// Must get articles separately for every source
		for (const [index, value] of sources.entries()) {
			axios({
				method: 'get',
				url: this.apiArticles,
				responseType: 'json',
				params: {
					apiKey: this.apiKey,
					source: value
				}
			})
			.then(response => {
				// Append new set of articles
				this.setState((prevState, response) => ({
					articles: [...prevState.articles, response.data]
				}));
				// List
				console.log(response);
				this.setState((prevState, response) => ({
					fetchedSources: [...prevState.fetchedSources, {
						show: false,
						source: response.data.source
					}]
				}));

				this.setState({loading: false});
				console.log(this.state.articles);
				console.log(this.state.fetchedSources);
			})
			.catch(function (error) {
				console.log(`GET articles\n${error}`);
			});
		}
	}

	render() {
		return (
			<div className="App">
				<Filter loading={this.loading} availableSources={this.availableSources} fetchedSources={this.fetchedSources} articles={this.articles} />
			</div>
		);
	}
}

export default App;
