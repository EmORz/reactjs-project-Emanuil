import React, { Component } from "react";
import style from "./index.module.css";
import Button from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };
  }

  static contextType = UserContext;

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if(username.length<=0 && password.length<=0){
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Enter some data in boxs!",
          },
        },
      });
      return
    }

    debugger;

      const checkForError = await authenticate(
        "http://localhost:9999/api/user/login",
        {
          username,
          password,
        },
        (user) => {
          debugger
          this.context.logIn(user);
          console.log(user);
          this.props.history.push("/");
        },
        (e) => {
          console.log("Érror", e);
          this.setState({
            error: {
              message: "Check the Form for errors",
              errors: {
                data: "Invalid user data - password or username!",
              },
            },
          });
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

    let errors = null;
    if (this.state.error) {
      errors = (
        <div>
          <h2>{this.state.error.message}</h2>
      <h2>{this.state.error.errors.data}</h2>

        </div>
      );
    }
    return (
      <PageWrapper>
            {errors}
        <form className={style.container} onSubmit={this.handleSubmit}>
          <Title title="Login" />
          <Input
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
