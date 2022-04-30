import React,{ useState } from "react";


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");

    
    function handleDismiss() {
        setResponseInfo("");
      }

    const MessageComp = {responseInfo && responseInfo.length > 0 ? (
       return (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        "")
      )}
}

