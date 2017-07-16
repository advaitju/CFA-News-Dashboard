/* eslint-disable */
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
			input: ''
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
								<i className={`fa fa-search fa-2x ${(this.state.input == '') ? '' : 'hide'}`} aria-hidden="true"></i>
								<i className={`fa fa-times fa-2x ${(this.state.input == '') ? 'hide' : ''}`} aria-hidden="true"></i>
							</div>
						</form>
						<p className="attribution">Powered by <a href="https://newsapi.org/" target="_blank">NewsAPI.org</a></p>
						<div className="overlay darken-gradient"></div>
					</div>
				</div>

				// <Message text="Loading... :)" show={true} />
				// <Message text="Nothing... :(" show={(this.state.sources == false || this.state.articles == false) ? 'hide' : ''} />

				<SourcesGrid />
				<ArticlesGrid />
			</div>
		);
	}
}

export default Filter;
