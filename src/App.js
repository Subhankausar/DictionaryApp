// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions/counterActions';

import './App.css';
import { Route, Routes } from 'react-router';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import History from './Components/History';
import Meaning from './Components/Meaning';
import NewBookPage from './Components/NewBookPage';

function App({ count, increment, decrement }) {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/info/:bookName' element={<NewBookPage />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
