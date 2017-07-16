import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import axios from 'axios';
import ReactDump from 'react-dump';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: '',
			articles: ''
		}
	}

	componentWillMount() {

	}

  render() {
    return (
      <div className="App">
				<Filter sources={this.sources} articles={this.articles} />
      </div>
    );
  }
}

export default App;
