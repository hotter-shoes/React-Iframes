import React, {useState, useEffect, useRef} from "react";
import IFrame from "./iframe.component";

/**********************************************************************************
 * This entire script if heavily influnced by this article
 * https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
/*********************************************************************************/

/*props passed
width, height - actualy size of the zmags, gained from the editor
src - iframe link
*/
function Zmags(props) {
    const [dimensions,
        setDimensions] = useState({height: null, width: null});

    /*references the ZMags component DOM*/
    const ref = useRef(null);

    /*when [ref,props] change, it will trigger. this allows the code to access the width of the component div*/
    useEffect(() => {
        if (!ref.current || !ref.current.getBoundingClientRect().width) 
            return;
        
        const [iframeWidth,
            iframeHeight] = calculateDimensions(props.height, props.width, ref.current.getBoundingClientRect().width)
        setDimensions({height: iframeHeight, width: iframeWidth});
    }, [ref, props]);

    /*set up a debounced resize script which when triggered will set the height and width of the iframe*/
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            console.log("resize detected");
            const [iframeWidth,
                iframeHeight] = calculateDimensions(props.height, props.width, ref.current.getBoundingClientRect().width)
            setDimensions({height: iframeHeight, width: iframeWidth});

        }, 500)

        window.addEventListener('resize', debouncedHandleResize);

        /*returning a function in useEffect acts as a call back, allowing clean up of the event listener*/
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    })

    return (
        <div className="responsive-iframe" ref={ref}>
            {dimensions.height && dimensions.width && <IFrame
                src={props.src}
                height={dimensions.height}
                width={dimensions.width}
                id={props.id}/>}
        </div>
    )

}

/*takes the intended size of the ZMags content and generates an aspect ratio, which should be maintained in the iframe*/
function calculateDimensions(height, width, componentWidth) {
    const ratio = height / width;

    const iframeWidth = componentWidth > width
        ? width
        : componentWidth;
    const iframeHeight = componentWidth > width
        ? height
        : ratio * componentWidth;
    return [iframeWidth, iframeHeight];

}

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

export default Zmags;
