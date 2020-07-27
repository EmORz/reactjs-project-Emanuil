import React, { Component } from "react";
import style from "./index.module.css";
import Button from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";
import authenticate from "../../utils/authenticate";
import UserContext from '../../Context'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  static contextType = UserContext

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    debugger;
    console.log(this.context)

    
    await authenticate(
      "http://localhost:9999/api/user/login",
      {
        username, 
        password,
      },
      (user) => {
        this.context.logIn(user)

        this.props.history.push("/");
      },(e)=>{
        console.log('Érror', e)
      }
    );

  };
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };
  render() {
    const { username, password } = this.state;

    return (
      <PageWrapper>
        <form className={style.container} onSubmit={this.handleSubmit}>
          <Title title="Login" />
          <Input
            type="text"
            value={username}
            onChange={(e) => this.handleChange(e, "username")}
            label="Username"
            id="username"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => this.handleChange(e, "password")}
            label="Password"
            id="password"
          />

          <Button title="Login" />
        </form>
      </PageWrapper>
    );
  }
}

export default Login;
