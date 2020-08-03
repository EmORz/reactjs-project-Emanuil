import React, { Component } from "react";
import Product from "../product";
import Error from "../../pages/error";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  getProducts = async () => {
    const promise = await fetch("http://localhost:9999/api/product");
    const products = await promise.json();
    this.setState({
      products,
    });
  };
  renderProducts() {
    const { products } = this.state;

    const p = products.filter((a) => a.title === this.props.searchData);

    if (p) {
      return p.map((product, index) => {
        return <Product key={product._id} index={index} {...product} />;
      });
    }
        return <h1>Error</h1>
    
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
      console.log(this.renderProducts())
      if(this.renderProducts().length===0){
          return <h1>There is no result from search!</h1>
      }
    return <div>{this.renderProducts()}</div>;
  }
}

export default Result;
