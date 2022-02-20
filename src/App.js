import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LandingPage} from './Containers/LandingPage/landingPage'
//App Component
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;