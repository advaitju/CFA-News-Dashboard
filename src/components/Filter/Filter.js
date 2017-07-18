import React, { Component } from 'react';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
								<i className={`fa fa-search fa-2x ${this.state.input === '' ? '' : 'hide'}`} aria-hidden="true"></i>
								<i className={`fa fa-times fa-2x ${this.state.input === '' ? 'hide' : ''}`} aria-hidden="true"></i>
							</div>
						</form>
						<p className="attribution">Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a> and <a href="http://icons.better-idea.org/" target="_blank" rel="noopener noreferrer">Favicon Finder</a></p>
						<div className="overlay darken-gradient"></div>
					</div>
				</div>

			</div>
		);
	}
}

export default Filter;
