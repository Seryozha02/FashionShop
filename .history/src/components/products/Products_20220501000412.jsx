import { Label } from "semantic-ui-react";
import Cards from "../card/Cards";
import { Table, Sticky, Message } from "semantic-ui-react";
import { useEffect, useState } from "react";
import u


function Products() {
  

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
