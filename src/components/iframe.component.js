import React from 'react';

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

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="iframe_cont">
            <iframe 
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
