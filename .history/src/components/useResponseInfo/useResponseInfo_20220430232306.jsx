import React from "react";
import use


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");

    function handleDismiss() {
        setResponseInfo("");
      }
}

