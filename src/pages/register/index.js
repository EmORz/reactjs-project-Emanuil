import React, { Component } from "react";
import style from "./index.module.css";
import SubmitButton from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";
import {register} from '../../API/remote'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repassword: "",
      password: "",
      error: false,
    };
    this.onClick = this.onClick.bind(this)
  }

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };
  async onClick(e) {
   e.preventDefault()
    console.log(this.state)
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

    const username = this.state.username;
    const password = this.state.password;

    const res =  await register(username, password);

    if(res){
      console.log('Success!')

      this.props.history.push('/login')
    }
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
        <div className={style.container}>
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

          <SubmitButton onClick={this.onClick} title="Register" />
        </div>
      </PageWrapper>
    );
  }
}

export default Register;
