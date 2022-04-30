import { Label } from "semantic-ui-react";
import Cards from "../card/Cards";
import { Table, Sticky, Message } from "semantic-ui-react";
import { useEffect, useState } from "react";
import useResponseInfo from "../useResponseInfo/useResponseInfo";


function Products() {
  const [MessageComp, setResponseInfo] = useResponseInfo();

  let countPageProduct = 4;


  
  return (
    <div className="home ui container">
      
      
      <Cards pageDevider={countPageProduct}
       setResponseInfo={setResponseInfo}
       
      />
    </div>
  );
}

export default Products;
