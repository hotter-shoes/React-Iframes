import React from "react";
import './App.css';
import PopUp from "./components/popUp.component";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ResponsiveIFrame from "./components/responsiveIFrame.component";

function ZMags_0() {
  return <ResponsiveIFrame
      src="https://c.zmags.com/viewer.html#5d2d8abbdbec8331a0b2b002"
      id="Zmags-in-page"
      width="1530"
      height="4000"/>

}

function ZMags_1() {
    return <ResponsiveIFrame
        src="https://c.zmags.com/viewer.html#5d1b5bbbdbec831274a1cd8a"
        id="Zmags-Offer-A"
        width="930"
        height="850"/>

}

function ZMags_2() {
    return <ResponsiveIFrame
        src="https://c.zmags.com/viewer.html#5b17f5939c5add7a9844ae94"
        id="Zmags-ComfortLab"
        width="930"
        height="2000"/>

}

function ZMags_3() {
    return <ResponsiveIFrame
        src="https://c.zmags.com/viewer.html#5d2dd2bcdbec8331a0b3158e"
        id="Zmags-metalics"
        width="1350"
        height="3300"/>

}

class Header extends React.Component {

    render() {
        return (
            <Router>
                <Link to="/">ZMags - Home</Link>
                <Link to="/1">ZMags - 1</Link>
                <Link to="/2">ZMags - 2</Link>
                <Link to="/3">ZMags - 3</Link>

                <section id="explanation">
                    <h1>Responsive iFrames in React</h1>
                    <p>Click the buttons to load some iframes, notice in the logs when the first
                        render, and re-render.</p>
                    <p>The iframe will only reload when the viewport size is changed</p>
                    <p>if the view port is changed and there is a rendered, but closed pop up, that
                        pop up will get completely rerendered.</p>
                </section>
                <PopUp
                    src="https://livehelp.hotter.com/hppc/hppcwis.dll?varUserRequest=REQ_WEBCHAT_MAIN&varUserLanguage=UK_Language&varBusinessUnitName=DEFAULT&varPageUrl=https%3A%2F%2Fwww.hotter.com%2Fgb%2Fen%3Fwebchat_test%3D1&screen_resolution=941x977&ip_address=152.195.235.17"
                    id="LiveHelp"
                    width="800"
                    height="600"
                    btnText="Livehelp Pop Up"/>
                <PopUp
                    src="https://newsletter.hottershoes.com/p/4Z38-116/sign-up-to-our-newsletter"
                    id="DotDigital"
                    width="800"
                    height="600"
                    btnText="DotDigital Pop Up"/>

                <Route exact path="/" component={ZMags_0}></Route>
                <Route path="/1" component={ZMags_1}></Route>
                <Route path="/2" component={ZMags_2}></Route>
                <Route path="/3" component={ZMags_3}></Route>
            </Router>
        );
    }
}

export default Header;
