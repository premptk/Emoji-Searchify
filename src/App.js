import './App.css';
import Nabvar from './components/Nabvar';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nabvar/>
        <News/>
      </div>
    )
  }
}

