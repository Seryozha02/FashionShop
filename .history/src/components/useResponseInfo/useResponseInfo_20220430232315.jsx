import React from "react";
import {React, useState } from "react";


function useResponseInfo(){
    const [responseInfo, setResponseInfo] = useState("");

    function handleDismiss() {
        setResponseInfo("");
      }
}

