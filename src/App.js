import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import NewsGrid from './components/NewsGrid/NewsGrid';
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
			categories: [
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
					show: true
				},
				{
					id: 'music',
					show: false
				},
				{
					id: 'politics',
					show: false
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
			],
			loading: true,
			nothingFound: false
		}

		this.apiSources = 'https://newsapi.org/v1/sources?';
		this.apiArticles = 'https://newsapi.org/v1/articles?';
		this.sourcesLanguage = 'en';
		this.apiKey = '1d4fef7aa6c44d9ea3ab179836a24b9a';
		this.iconsApiUrl = 'https://icons.better-idea.org/icon?';
		this.iconSizes = 'size=80..120..200';

		this.getFavicons = this.getFavicons.bind(this);
		this.getArticles = this.getArticles.bind(this);
		this.sourcesToggle = this.sourcesToggle.bind(this);
		this.sourcesShowUpdate = this.sourcesShowUpdate.bind(this);
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
			let sources = response.data.sources.map((source) => {
				source.fetched = false;
				for (const category of this.state.categories) {
					if (category.id === source.category) {
						source.show = category.show;
						break;
					}
				}
				return source;
			});
			sources = this.getFavicons(sources);
			// console.log(sources);
			this.setState({ sources: sources });
			this.getArticles([
				sources[0],
				sources[1],
				sources[2],
			]);
		})
		.catch(function (error) {
			console.log(`GET sources\n${error}`);
		});
	}

	getFavicons(sources) {
		for (const [index, value] of sources.entries()) {
			const url = 'url=' + encodeURIComponent(value.url);
			value.icon = this.iconsApiUrl + url + '&' + this.iconSizes;
			sources[index] = value;
		}
		return sources;
	}

	getArticles(sources) {
		this.setState({loading: true});

		// GET articles for select sources
		// Filter out sources that have already been fetched
		for (const [index, value] of sources.entries()) {
			for (const valueJ of this.state.sources) {
				if (value.id === valueJ.id && valueJ.fetched) {
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
				// for (const [index, value] of response.data.articles.entries()) {
				// 	value.show = false;
				// 	response.data.articles[index] = value;
				// }
				let updatedArticles = this.state.articles.slice();
				updatedArticles.push(response.data);
				this.setState({
					articles: updatedArticles
				});

			})
			.catch(function (error) {
				console.log(`GET articles\n${error}`);
			});
		}
		this.setState({loading: false});
	}

	sourcesToggle(sourceId) {
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
	sourcesShowUpdate() {
		for (const [index, value] of this.state.sources.entries()) {
			for (const category of this.state.categories) {
				if (category.id === value.category) {
					value.show = category.show;
					let updatedSources = this.state.sources;
					updatedSources[index] = value;
					this.setState({
						sources: updatedSources
					});
					break;
				}
			}
		}
	}

	categoryToggle(category) {
		for (const [index, value] of this.state.categories.entries()) {
			if (category === value.id) {
				value.show = !value.show;
				let updatedCategories = this.state.categories;
				updatedCategories[index] = value;
				this.setState({
					categories: updatedCategories
				})
				this.sourcesShowUpdate();
				break;
			}
		}
	}

	render() {
		return (
			<div className="App">

				<Filter articles={this.articles} />

				<SourcesGrid sources={this.state.sources} sourcesToggle={this.sourcesToggle} categories={this.state.categories} categoryToggle={this.categoryToggle} />

				<Message text={"Loading... :)"} show={this.state.loading ? true : false} />
				<Message text={"Nothing... :("} show={this.state.nothingFound ? true : false} />

				<NewsGrid articles={this.state.articles} />

			</div>
		);
	}
}

export default App;
