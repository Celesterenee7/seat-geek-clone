import React from "react";
import Home from './Home';
import NavBar from './NavBar';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
  <div>
  <NavBar />
    <div class="container">
    <Home/>
    </div>
    </div>
  );
}

export default App;
