import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  c = 'John';
  render() {
    return (
      <div>
         {/* Hello my first class based component {this.c} */}
         <NavBar/>
         <News pageSize={9}/>
         
      </div>
    );
  }
}
