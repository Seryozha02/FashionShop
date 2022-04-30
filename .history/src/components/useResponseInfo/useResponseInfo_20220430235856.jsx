import React, { useState } from "react";
import { Table, Icon, Message } from "semantic-ui-react";

function useResponseInfo() {
  const [responseInfo, setResponseInfo] = useState("");

  function handleDismiss() {
    setResponseInfo("");
  }

  
  const TestMessage = () => {
     return (
         <>
            { responseInfo && responseInfo.length > 0 ? (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        ""
      
      );
      </>
  }

  return [TestMessage, setResponseInfo];
}

export default useResponseInfo;
