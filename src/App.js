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
			sources: [],
			articles: [],
			loading: true,
			nothingFound: false
		}
		this.categories = [
			{
				id: 'general',
				show: true,
			},
			{
				id: 'business',
				show: true
			},
			{
				id: 'entertainment',
				show: false
			},
			{
				id: 'gaming',
				show: false
			},
			{
				id: 'music',
				show: false
			},
			{
				id: 'politics',
				show: true
			},
			{
				id: 'science-and-nature',
				show: true
			},
			{
				id: 'sport',
				show: false
			},
			{
				id: 'technology',
				show: true
			}
		];

		this.apiSources = 'https://newsapi.org/v1/sources?';
		this.apiArticles = 'https://newsapi.org/v1/articles?';
		this.sourcesLanguage = 'en';
		this.apiKey = '1d4fef7aa6c44d9ea3ab179836a24b9a';

		this.getFavicons = this.getFavicons.bind(this);
		this.getArticles = this.getArticles.bind(this);
		this.sourcesToggle = this.sourcesToggle.bind(this);
		this.categoryToggle = this.categoryToggle.bind(this);
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
			const sources = response.data.sources.map((source) => {
				source.fetched = false;
				source.show = false;
				return source;
			});
			this.setState({ sources: sources });
			this.getArticles([
				this.state.sources[0],
				this.state.sources[1],
				this.state.sources[2],
			]);
		})
		.catch(function (error) {
			console.log(`GET sources\n${error}`);
		});
	}

	getFavicons() {

	}

	getArticles(sources) {
		this.setState({loading: true});

		// GET articles for select sources
		// Filter out sources that have already been fetched
		for (const [index, value] of sources.entries()) {
			for (const valueJ of this.state.sources) {
				if (value.id === valueJ.id && !valueJ.fetched) {
					sources.splice(index, 1);
				}
			}
		}
		// Must get articles separately for every source
		for (const value of sources) {
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
				for (const [index, value] of response.data.articles.entries()) {
					value.show = true
					response.data.articles[index] = value;
				}
				this.setState({
					articles: [...this.state.articles, response.data]
				});

				this.setState({loading: false});
			})
			.catch(function (error) {
				console.log(`GET articles\n${error}`);
			});
		}
	}

	sourcesToggle(sources) {
		for (const sourceId of sources) {
			for (const [indexJ, valueJ] of this.state.sources.entries()) {
				if (sourceId === valueJ.id) {
					valueJ.show = !valueJ.show;
					let updatedSources = this.state.sources;
					updatedSources[indexJ] = valueJ;
					this.setState({
						sources: updatedSources
					});
					break;
				}
			}
		}
	}

	categoryToggle(category) {
		for (const [indexJ, valueJ] of this.state.sources.entries()) {
			if (category === valueJ.category) {
				for (const value of this.state.categories) {
					if (category === value.id) {
						const updatedShow = !value.show;
					}
				}
				// valueJ.show = !valueJ.show;
				// let updatedSources = this.state.sources;
				// updatedSources[indexJ] = valueJ;
				// this.setState({
				// 	sources: updatedSources
				// });
				break;
			}
		}
	}

	render() {
		return (
			<div className="App">

				<Filter articles={this.articles} />

				<SourcesGrid sources={this.state.sources} sourcesToggle={this.sourcesToggle} categories={this.categories} categoryToggle={this.categoryToggle} />

				<Message text={"Loading... :)"} show={this.state.loading ? true : false} />
				<Message text={"Nothing... :("} show={this.state.nothingFound ? true : false} />

				<ArticlesGrid />

			</div>
		);
	}
}

export default App;
