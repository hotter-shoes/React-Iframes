import React from "react";

import IFrame from '../components/iframe.component';


class Zmags extends React.Component{
  render(){
  const url ={
      base:"https://c.zmags.com/viewer.html",
      zmag_id:"5cb86f1edbec8323b94cae12"
  }

  const src = url.base + "#" + url.zmag_id;

  return (
    <IFrame src={src}></IFrame>
  );
  }
}

export default Zmags;