import React from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import ResponsiveIFrame from './responsiveIFrame.component';

class PopUp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            clicked:false,
            hidden:true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        ReactGA.event({
            category: 'Content',
            action: 'Viewed Popup',
            label: 'ZMags'
          });

        TagManager.dataLayer({
            dataLayer:{
                event:"Viewed Popup",
                popup:"ZMags"     
            }
          
        })

    }

    render(){     
        const popUpClass  = this.state.hidden?"pop-up hidden":"pop-up";
        return(
       
            <div id="pop-up" data-content="zmags">
                <button className="open" onClick={this.handleClick}>{this.props.btnText}</button>
                <div className={popUpClass}>
                    <button onClick={this.handleClick}>Close</button>
                    {this.state.clicked && <ResponsiveIFrame src={this.props.src} width={this.props.width} height={this.props.height}/> }
                </div>
             
            </div>
        )
    }

    handleClick = () =>{
        const copiedState = Object.assign({},this.state)
        copiedState.clicked = true;
        copiedState.hidden = !copiedState.hidden;
        this.setState(copiedState);
    }

}

export default PopUp;
