import React, { Component } from "react";

const Product =({description, author, index}) => {

 

    return (
      <div>
        <p>{index}.{description}</p>
      </div>
    );
  
}

export default Product;
