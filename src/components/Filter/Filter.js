import React, { Component } from 'react';
import ArticlesGrid from '../ArticlesGrid/ArticlesGrid';
import SourcesGrid from '../SourcesGrid/SourcesGrid';
import Message from '../Message/Message';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: props.sources,
			articles: props.articles,
			input: '',
			loading: true,
			nothingFound: false
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="filter" style={{backgroundImage: "url(img/dashboard-bg.jpeg)"}}>
						<h1>News Dashboard</h1>
						<form action="" method="post">
							<div className="_input-container">
								<input className="_input" type="text" placeholder="Filter" />
								<i className={`fa fa-search fa-2x ${(this.state.input === '') ? '' : 'hide'}`} aria-hidden="true"></i>
								<i className={`fa fa-times fa-2x ${(this.state.input === '') ? 'hide' : ''}`} aria-hidden="true"></i>
							</div>
						</form>
						<p className="attribution">Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a></p>
						<div className="overlay darken-gradient"></div>
					</div>
				</div>

				<SourcesGrid sources={this.state.sources}/>
				
				<Message text="Loading... :)" show={(this.state.sources === undefined || this.state.articles === undefined) && !this.state.nothingFound ? true : false} />
				<Message text="Nothing... :(" show={(this.state.nothingFound) ? true : false} />

				<ArticlesGrid />
			</div>
		);
	}
}

export default Filter;
