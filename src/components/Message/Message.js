import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			show: props.show
		}
	}

	render () {
		return (
			<div className={`row message ${this.state.show ? '' : 'hide'}`}>
				<p className="_message-body">{this.state.text}</p>
			</div>
		);
	}
}

export default Message;
