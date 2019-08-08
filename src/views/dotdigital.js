import React from "react";

import IFrame from '../components/iframe.component';


class DotDigital extends React.Component{
  render(){

    const url ={
        base:"https://newsletter.hottershoes.com",
        landing_page_path:"/p/4Z38-116/sign-up-to-our-newsletter"
    }

    const src = url.base + url.landing_page_path
  return (
    <IFrame src={src} id="dotdigital"></IFrame>
  );
  }
}

export default DotDigital;