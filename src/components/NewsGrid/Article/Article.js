import React, { Component } from 'react';

class Article extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.url} target="_blank" rel="noopener noreferrer">
				<div className="_article">
					<div className="_article-image" style={{backgroundImage: `url(${this.props.img})`}}></div>
					<h2 className="_article-title">{this.props.title}</h2>
					<h5>{this.props.author} <span className="_date">&nbsp; &#8250; &nbsp; {this.props.published}</span></h5>
					<p className="_article-snippet">{this.props.snippet}</p>
				</div>
			</a>
		);
	}
}

export default Article;
