import React, { Component } from "react";
import style from "./index.module.css";
import Button from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password:''
    };
  }
  onChange = (event, type) =>{
      const newState = {}
      console.log(event.target.value)
      newState[type] = event.target.value
      this.setState(newState)
  }
  render() {
      const {email, password} = this.state
      
    return (
      <PageWrapper>
        <div className={style.container}>
          <Title title="Login" />
          <Input value={email} onChange={(e) => this.onChange(e, 'email')} label="Email" id="email" />

          <Input value={password} onChange={(e) => this.onChange(e, 'password')} label="Password" id="password" />

        

          <Button title="Login" />
        </div>
      </PageWrapper>
    );
  }
}

export default Login;
