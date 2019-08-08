
import React from "react";

import IFrame from '../components/iframe.component';


class LiveHelp extends React.Component{
  render(){
    const url = {
      base:"https://livehelp.hotter.com/hppc/hppcwis.dll",
        params:[
            {k:"varUserRequest",v:"REQ_WEBCHAT_MAIN"},
            {k:"varUserLanguage",v:"UK_Language"},
            {k:"varBusinessUnitName",v:"DEFAULT"},
            {k:"varPageUrl",v:"https%3A%2F%2Fwww.hotter.com%2Fgb%2Fen%3Fwebchat_test%3D1"},
            {k:"screen_resolution",v:"1260x947"},
            {k:"ip_address",v:"152.195.235.17"},
            {k:"varUserRequest",v:"REQ_WEBCHAT_MAIN"}
        ]
    }
   //combine the kv pairs and then concatinate them into a list with & as the delimiter
   var params = url.params.map(item=>item.k+"="+item.v).join("&");
   var src = url.base + "?"+ params;
  return (
    <IFrame src={src} id="livehelp"></IFrame>
  );
  }
}

export default LiveHelp;