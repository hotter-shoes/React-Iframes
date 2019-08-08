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


    componentDidMount(){
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
