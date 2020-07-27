import React, { Component } from "react";
import style from "./index.module.css";
import SubmitButton from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";

import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repassword: "",
      password: "",
      error: false,
    };

  }

  static contextType = UserContext

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };
   handlerSubmit= async (e)=> {

   e.preventDefault()
   const {
    username,
    password
  } = this.state
  debugger
    if (this.state.password !== this.state.repassword) {
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            repeat: "Password dont match!",
          },
        },
      });
      return;
    }


    await authenticate(
      "http://localhost:9999/api/user/register",
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
  render() {
    const { username, password, repassword } = this.state;

    let errors = null;
    if (this.state.error) {
      errors = (
        <div>
          <h2>{this.state.error.message}</h2>
        </div>
      );
    }
    return (
      <PageWrapper>
        <form className={style.container} onSubmit={this.handlerSubmit}>
          {errors}
          <Title title="Register" />

          <Input
            value={username}
            type="text"
            onChange={(e) => this.onChange(e, "username")}
            label="Username"
            id="username"
          />

          <Input
            value={password}
            type="password"
            onChange={(e) => this.onChange(e, "password")}
            label="Password"
            id="password"
          />

          <Input
            value={repassword}
            type="password"
            onChange={(e) => this.onChange(e, "repassword")}
            label="Re-Password"
            id="Re-Password"
          />

          <SubmitButton title="Register" />
        </form>
      </PageWrapper>
    );
  }
}

export default Register;
