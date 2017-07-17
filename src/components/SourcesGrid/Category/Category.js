import React, { Component } from 'react';

class Category extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.props.onToggle(this.props.categoryId);
	}

	render() {
		return (
			<div className={`_category ${this.props.selected ? 'selected' : ''}`} onClick={this.handleToggle}>
				<h4>{this.props.categoryName}</h4>
			</div>
		);
	}
}

export default Category;
