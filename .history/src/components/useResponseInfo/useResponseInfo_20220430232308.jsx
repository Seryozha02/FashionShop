import React from "react";
import { useState } from "react";


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");

    function handleDismiss() {
        setResponseInfo("");
      }
}

