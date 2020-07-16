import React from "react";

import Input from "../../common/Input";
import { login, getAllProducts } from "../../../API/remote";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      products: [],
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmitHandler() {

    const username = this.state.username;
    const password = this.state.password;
    const products = await getAllProducts()

    this.setState({
      products
    })
    const res = await login(username, password);

  }

  componentDidMount() {
  
    getAllProducts()
  }
  

  render() {
    return (
      
      <div className="container">
        {this.state.products.map(p => p.price)}
        <form onSubmit={this.onSubmitHandler}>
          <Input
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            label="Username"
          />

          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            label="Password"
          />

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
