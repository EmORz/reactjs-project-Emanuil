import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";
import UserContext from "../../Context";
import Button from "../../components/button/submit-button";
import style from "./index.module.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      products: [],
    };
  }

  static contextType = UserContext;

  logOut = () => {
    this.context.logOut();
    this.props.history.push("/");
  };
  componentDidMount() {
    this.getUser(this.props.match.params.userid);
  }

  getUser = async (userid) => {
    const promisse = await fetch(`http://localhost:9999/api/user?id=${userid}`);

    const promise = await fetch("http://localhost:9999/api/product");
    const products = await promise.json();
    
    const user = await promisse.json();
    this.setState({
      username: user.username,
      products: products.filter((p) => p.author === user._id),
    });
  };
  render() {
    const { username, products } = this.state;

    return (
      <PageWrapper>
        <form className={style.container} onSubmit={this.logOut}>
          <p>User: {username}</p>
          <p>Created Posts/Products: {products.length} pieces</p>

          <Button title="Logout" />
        </form>
      </PageWrapper>
    );
  }
}

export default Profile;
