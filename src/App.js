import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import ArticlesGrid from './components/ArticlesGrid/ArticlesGrid';
import SourcesGrid from './components/SourcesGrid/SourcesGrid';
import Message from './components/Message/Message';
import axios from 'axios';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			availableSources: [],
			fetchedSources: [],
			articles: [],
			loading: true,
			nothingFound: false
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
				response.data.sources[0],
				response.data.sources[1],
				response.data.sources[2],
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
					source: value.id
				}
			})
			.then(response => {
				// Append new set of articles
				this.setState({
					articles: [...this.state.articles, response.data]
				});
				// List
				this.setState({
					fetchedSources: [...this.state.fetchedSources, {
						show: false,
						source: value
					}]
				});
				console.log(this.state.articles);

				this.setState({loading: false});
			})
			.catch(function (error) {
				console.log(`GET articles\n${error}`);
			});
		}
	}

	render() {
		return (
			<div className="App">

				<Filter articles={this.articles} />

				<Message text={"Loading... :)"} show={this.state.loading ? true : false} />
				<Message text={"Nothing... :("} show={this.state.nothingFound ? true : false} />

				<SourcesGrid fetchedSources={this.state.fetchedSources}/>

				<ArticlesGrid />

			</div>
		);
	}
}

export default App;
