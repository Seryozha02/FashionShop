import React,{ useState } from "react";


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");
    let MessageComp  = ""
    
    function handleDismiss() {
        setResponseInfo("");
      }
    
     const MessageComp = responseInfo && responseInfo.length > 0 ? (
       
        <Message success onDismiss={handleDismiss} content={responseInfo} /> 
      ) : (
        ""
      )
    
    };



