import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import "../home/home.css";
import { Table, Icon, Message } from "semantic-ui-react";
import { useEffect, useState } from "react";
import useResponseInfo from "../useResponseInfo/useResponseInfo";


function Home() {
 // const [responseInfo, setResponseInfo] = useState("");
  const [MessageComp, setResponseInfo] = useResponseInfo()

  let countPageProduct = 4;

  // function handleDismiss() {
  //   setResponseInfo("");
  // }
  return (
    <div className="home ui container">
     {/* {responseInfo && responseInfo.length > 0 ? (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        ""
      )} */}
      <Slide slides={slidesData()} />
      
      <Cards
        pageDevider={countPageProduct}
        setResponseInfo={setResponseInfo}
        
      />
    </div>
  );
}
export default Home;
