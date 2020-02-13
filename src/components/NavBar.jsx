import React from "react";
import Seat from "./seat.jpeg";
import App from "./App.css";
import Search from "./search.png";



function NavBar(){

  var banner = {
    backgroundColor: "rgb(22, 115, 230)",
    height: "400px",
    color: 'white',

  }

  var slogan = {
    paddingTop: "100px",
    textAlign: "center",
    fontSize: "50px",
    paddingBottom: '25px',
  }

  var searchBar = {
    color: 'grey',
    border: "1px solid white",
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: 'rgba(15, 15, 15, 0.12) 0px 16px 24px 0px',
  }

  let icon = {
    width: '4%',
  }

  let leftMenu = {
    padding: '6px',
  }

  let rightMenu = {
    float: 'right',
    padding: '10px',
    border: '1px',
    // backgroundColor: 'rgba(15,15,15,.1)',
    // borderRadius: '.5em',
  }

  let searchIcon = {
    width: '3%',
    paddingRight: '10px',
  }

  let signUp = {
    border: '1px',
    backgroundColor: 'rgba(15,15,15,.1)',
    borderRadius: '.5em',
    padding: '10px'
  }




  return (
    <div style={banner}>
    <div class="container">
    <img src={Seat} alt='seat' style={icon}/>
    <a href="#" style={leftMenu} ><strong> SeatGeek </strong></a>
    <a href="#" style={leftMenu} > Sports </a>
    <a href="#" style={leftMenu} > Music </a>
    <a href="#" style={leftMenu} > More </a>
    <a href="#" style={leftMenu} > Sell </a>
    <a href="#" style={leftMenu} > Support </a>

    <a href="#" style={rightMenu}> Log In </a>
    <a href="#" style={rightMenu}><span style={signUp}> Sign Up</span> </a>
    <a href="#" style={rightMenu}> Track My Order </a>

    <h1 style={slogan}>Life's an event. We have the tickets.</h1>
    <div style={searchBar}>
    <img src={Search} alt='search' style={searchIcon}/>
    <span> Search by team, artist, event, or venue </span>
    </div>
    </div>
    </div>
  );
}

export default NavBar;
