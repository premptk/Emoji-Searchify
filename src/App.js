import './App.css';
import Nabvar from './components/Nabvar';

import React, { Component } from 'react'
import EmojiContainer from './components/EmojiContainer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nabvar/>
          <Routes>
            <Route exact path="/" element={<EmojiContainer category=""/>}/>
            <Route exact path="/smileys-and-people" element={<EmojiContainer category="/category/smileys-and-people"/>}/>
            <Route exact path="/animals-and-nature" element={<EmojiContainer category="/category/animals-and-nature"/>}/>
            <Route exact path="/food-and-drink" element={<EmojiContainer category="/category/food-and-drink"/>}/>
            <Route exact path="/travel-and-places" element={<EmojiContainer category="/category/travel-and-places"/>}/>
            <Route exact path="/activities" element={<EmojiContainer category="/category/activities"/>}/>
            <Route exact path="/objects" element={<EmojiContainer category="/category/objects"/>}/>
            <Route exact path="/symbols" element={<EmojiContainer category="/category/symbols"/>}/>
            <Route exact path="/flags" element={<EmojiContainer category="/category/flags"/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}

