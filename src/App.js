import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import Swipebottons from './components/Swipebottons'
import Chats from './components/Chats';
import Chatscreen from './components/Chatscreen';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

        <Route path ="/chat/:person" element={
          <>
            <Header backButton='/chat' />
            <Chatscreen/>
            </>
          } />
          <Route path ="chat" element={
          <>
            <Header backButton='/' />
            <Chats/>
            </>
          } />
          <Route path="/" element={
            <>
            <Header />
            <TinderCards/>
            <Swipebottons/>
            </>
          } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
