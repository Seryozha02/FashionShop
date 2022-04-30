import React,{ useState } from "react";


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");
    
    
    function handleDismiss() {
        setResponseInfo("");
      }
    
     const MessageComp = responseInfo && responseInfo.length > 0 ? (
       
        <Message success onDismiss={handleDismiss} content={responseInfo} /> 
      ) : (
        ""
      )

      return [MessageComp, setResponseInfo]
    
    };


  export default useResponseInfo;
 