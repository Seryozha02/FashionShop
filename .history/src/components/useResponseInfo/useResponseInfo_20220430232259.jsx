import React from "react";


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");

    function handleDismiss() {
        setResponseInfo("");
      }
}

