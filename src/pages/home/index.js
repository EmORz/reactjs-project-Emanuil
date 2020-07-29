import React, { Component } from "react";
import styles from "./index.module.css";
import Product from "../../components/product";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import Products from "../../components/products";
import UserContext from '../../Context'

class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  
  static contextType = UserContext

  getProducts = async () => {
    const promise = await fetch("http://localhost:9999/api/product");
    const products = await promise.json();
    this.setState({
      products
    });
  };

  renderProducts() {
    const { products } = this.state;

    return products.map((product, index) => {
      return <Product key={product._id} index={index} {...product} />;
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {

    return (
      <PageWrapper>
        <Title title="Home" />

        <Products/>
      </PageWrapper>
    );
  }
}

export default Publications;
