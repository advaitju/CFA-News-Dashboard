import React, { Component } from 'react';
import ArticlesGrid from './components/ArticlesGrid/ArticlesGrid';
import Filter from './components/Filter/Filter';
import SourcesGrid from './components/SourcesGrid/SourcesGrid';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
  render() {
    return (
      <div className="App">
				<Filter />
				<SourcesGrid />
				<ArticlesGrid />
      </div>
    );
  }
}

export default App;
