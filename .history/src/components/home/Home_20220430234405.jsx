import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import "../home/home.css";
import { Table, Icon, Message } from "semantic-ui-react";
import { useEffect, useState } from "react";
import useResponseInfo from "../useResponseInfo/useResponseInfo";


function Home() {
  const [testMessage, setResponseInfo] = useResponseInfo();

  let countPageProduct = 4;

  
  return (
    <div className="home ui container">
   

      <MessageComp />



      
      <Slide slides={slidesData()} />
      
      <Cards
        pageDevider={countPageProduct}
        setResponseInfo={setResponseInfo}
        
      />
    </div>
  );
}
export default Home;
