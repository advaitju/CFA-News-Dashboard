import React, { Component } from 'react';

class Message extends Component {
	render () {
		return (
			<div className={`row message ${this.props.show ? '' : 'hide'}`}>
				<p className="_message-body">{this.props.text}</p>
			</div>
		);
	}
}

export default Message;
