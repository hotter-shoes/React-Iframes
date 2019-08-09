import React from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

class IFrame extends React.Component{

    static defaultProps = {
        width:"100%",
        height:"100%",
        className:"",
        id:"",
        styles:"",
        src:"",
        noscrolling:""
    };


    /*setting this to false will prevent the iframe from being updated when state changes*/
    shouldComponentUpdate(){
        if(this.props.rerender){
            console.log("%c RE-RENDERING IFRAME " + this.props.id,"background:red;color:white;padding:5px 0")
            return true; 
        }else{
            console.log("%c NOT RE-RENDERING IFRAME " + this.props.id,"background:gold;color:black;padding:5px 0")
            return false; 
        }
    }


    componentDidMount(){
        console.log("%c RENDERING IFRAME 1st TIME " + this.props.id,"background:green;color:white;padding:5px 0")
        ReactGA.event({
            category: 'Content',
            action: 'Viewed Iframe',
            label: this.props.src
          });

        TagManager.dataLayer({
            dataLayer:{
                event:"Viewed Iframe",
                iframe:{src:this.props.src,id:this.props.id}      
            }
          
        })

    }



    render(){

        return(
            <div className="iframe_cont">
            <iframe 
                title="iframe-component"
                id={this.props.id} 
                className={this.props.className} 
                src={this.props.src} 
                width={this.props.width} 
                height={this.props.height} 
                styles={this.props.styles} 
                noscrolling={this.props.noscrolling}
            />
            </div>
        )

    }

}

export default IFrame;
