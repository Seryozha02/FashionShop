import React,{ useState } from "react";
import { Table, Icon, Message } from "semantic-ui-react";


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
      console.log(MessageComp);

      return [MessageComp, setResponseInfo]
    
    };


  export default useResponseInfo;
 