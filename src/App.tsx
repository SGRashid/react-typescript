import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloPage from './components/HelloPage/HelloPage';
import NothingPage from './components/NothingPage/NothingPage';
import HomeSweetHome from './components/HomeSweetHome/HomeSweetHome';

function App() {
 return (
   <div className="App">
     {/* <HelloPage></HelloPage>
     <NothingPage></NothingPage>
     <HomeSweetHome></HomeSweetHome> */}
     <Router>
      <Routes>
        <Route path="/" element={<HomeSweetHome/>} />
        <Route path="/hello" element={<HelloPage/>} />
        <Route path="/nothing" element={<NothingPage/>} />
      </Routes>
     </Router>
   </div>
 );
}

export default App;
