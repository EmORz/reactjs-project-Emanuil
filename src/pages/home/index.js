import React, { Component } from "react";
import styles from "./index.module.css";
import Product from "../../components/product";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import Products from "../../components/products";
import Input from "../../components/Input";
import UserContext from "../../Context";
import Result from "../../components/result/index";

import Clock from "react-clock";

class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      result: [],
      searchData: "",
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }
  static contextType = UserContext;

  getProducts = async () => {
    const promise = await fetch("http://localhost:9999/api/product");
    const products = await promise.json();
    this.setState({
      products,
    });
  };

  renderProducts() {
    const { products } = this.state;

    return products.map((product, index) => {
      return <Product key={product._id} index={index} {...product} />;
    });
  }

  renderSearch() {
    const { result } = this.state;

    return result.map((product, index) => {
      return <Product key={product._id} index={index} {...product} />;
    });
  }

  componentDidMount() {
    this.getProducts();
  }
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };

  render() {
    const { searchData } = this.state;

    return (
      <PageWrapper>
        <Title title="Home" />
        <div className={styles.clock} id="clock">
          <Clock id="clock" value={this.state.date} />
        </div>

        <div className={styles.search}>
          <Input
            value={searchData}
            onChange={(e) => this.handleChange(e, "searchData")}
            label="Search Box"
            id="Search"
            size="150"
            placeholder="какво търсите ...?"
          />
   
        </div>
        {searchData ? <Result searchData={searchData} /> : <Products />}
      </PageWrapper>
    );
  }
}

export default Publications;
