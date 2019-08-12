import React from "react";
import './App.css';
import PopUp from "./components/popUp.component";
import ResponsiveIFrame from "./components/responsiveIFrame.component";



class Header extends React.Component{

  render(){
  return (
    <>
    <section id="explanation">
      <h1>Responsive iFrames in React</h1>
      <p>Click the buttons to load some iframes, notice in the logs when the first render, and re-render.</p>
      <p>The iframe will only reload when the viewport size is changed</p>
      <p>if the view port is changed and there is a rendered, but closed pop up, that pop up will get completely rerendered.</p>
    </section>
     <PopUp src="https://c.zmags.com/viewer.html#5d2d8abbdbec8331a0b2b002" width="1530" height="4000" btnText="ZMags Pop Up"/>
     <PopUp src="https://newsletter.hottershoes.com/p/4Z38-116/sign-up-to-our-newsletter" width="800" height="600" btnText="DotMailer Pop Up"/>
     <ResponsiveIFrame src="https://c.zmags.com/viewer.html#5d2d8abbdbec8331a0b2b002" width="1530" height="4000"/>
    </>
  );
  }
}

export default Header;
