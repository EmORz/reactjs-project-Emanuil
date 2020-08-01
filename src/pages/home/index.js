import React, { Component } from "react";
import styles from "./index.module.css";
import Product from "../../components/product";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import Products from "../../components/products";
import Input from "../../components/Input";
import UserContext from "../../Context";

class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      result: [],
      title: "",
    };
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

  Search=()=>{
    debugger
    const { title, products } = this.state;

    const searchResult = products.filter(find => find.title === title)

    this.setState({
      result: searchResult
    })
    debugger
    console.log("Here SearchResult=>", searchResult)


  }

  render() {
    const { title } = this.state;


    return (
      <PageWrapper>
        <Title title="Home" />
   
        <form  onSubmit={this.Search}>
 
          <Input
          value={title}
          onChange={(e) => this.handleChange(e, "title")}
          label="Title"
          id="title"
        />
        <button >Search</button>
        </form>
 

        
        <Products />
      </PageWrapper>
    );
  }
}

export default Publications;
