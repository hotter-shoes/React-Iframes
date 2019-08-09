import React from "react";
import './App.css';
import PopUp from "./components/popUp.component";



class Header extends React.Component{

  render(){
  return (
    <>
     <PopUp src="https://c.zmags.com/viewer.html#5d2d8abbdbec8331a0b2b002" width="1530" height="4000" btnText="ZMags Pop Up"/>
     <PopUp src="https://newsletter.hottershoes.com/p/4Z38-116/sign-up-to-our-newsletter" width="800" height="600" btnText="DotMailer Pop Up"/>
    </>
  );
  }
}

export default Header;
