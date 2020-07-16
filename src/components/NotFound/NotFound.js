import React from "react";
import "./NotFound.css";
import { login, getAllProducts } from "../../API/remote";

class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  async onSubmitHandler() {

    const products = await getAllProducts()

    this.setState({
      products
    })

  }
  componentDidMount() {
    getAllProducts();
  }
  render() {
    return (
      <div className="FourOFour">
        <img alt="404" />
        {this.state.products.map(p => p.price)}
      </div>
    );
  }
}

export default NotFound;
