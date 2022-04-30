import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import "../home/home.css";
import useResponseInfo from "../useResponseInfo/useResponseInfo";


function Home() {
  const [MessageComp, setResponseInfo] = useResponseInfo();
  
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
