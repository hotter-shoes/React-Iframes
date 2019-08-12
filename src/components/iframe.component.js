import React from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

class IFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        this.hideSpinner = this
            .hideSpinner
            .bind(this)
    }

    static defaultProps = {
        width: "100%",
        height: "100%",
        className: "",
        id: "",
        styles: "",
        src: "",
        noscrolling: ""
    };

    /*setting will only re-render the iframe if it detects the dimensions have been changed.*/
    shouldComponentUpdate(nextProps, nextState) {

        if (this.props.height !== nextProps.height || this.props.width !== nextProps.width) {
            console.log("%c RE-RENDERING IFRAME - RESIZE " + this.props.id, "background:darkred;color:white;padding:5px 0");
            return true;
        } else if (this.state.loading !== nextState.loading) {
            console.log("%c RE-RENDERING IFRAME -Finished Loading " + this.props.id, "background:red;color:white;padding:5px 0");
            return true;
        } else {
            console.log("%c NOT RE-RENDERING IFRAME " + this.props.id, "background:gold;color:black;padding:5px 0")
            return false;
        }
    }

    componentDidMount() {
        console.log("%c RENDERING IFRAME  " + this.props.id, "background:green;color:white;padding:5px 0");
        ReactGA.event({category: 'Content', action: 'Viewed Iframe', label: this.props.src});

        TagManager.dataLayer({
            dataLayer: {
                event: "Viewed Iframe",
                iframe: {
                    src: this.props.src,
                    id: this.props.id
                }
            }
        })

    }

    render() {

        return (
            <div className="iframe-container">
                <iframe
                    title="iframe-component"
                    id={this.props.id}
                    className={this.state.loading
                    ? this.props.className + "loading"
                    : this.props.className + "loaded"}
                    src={this.props.src}
                    width={this.props.width}
                    height={this.props.height}
                    styles={this.props.styles}
                    noscrolling={this.props.noscrolling}
                    onLoad={this.hideSpinner}/>

            </div>
        )
    }
    hideSpinner() {
        this.setState({loading: false});
    }
}

export default IFrame