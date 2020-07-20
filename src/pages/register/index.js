import React, { Component } from "react";
import style from "./index.module.css";
import Button from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        repassword:'',
        password:''
    };
  }

  onChange = (event, type) =>{
      const newState = {}
      newState[type] = event.target.value

      this.setState(newState)
  }
  render() {
      const {email, password, repassword} = this.state
      
    return (
      <PageWrapper>
        <div className={style.container}>
          <Title title="Register" />
          <Input value={email} onChange={(e) => this.onChange(e, 'email')} label="Email" id="email" />

          <Input value={password} onChange={(e) => this.onChange(e, 'password')} label="Password" id="password" />

          <Input
            value={repassword}
            onChange={(e) => this.onChange(e, 'repassword')}
            label="Re-Password"
            id="Re-Password"
          />

          <Button title="Register" />
        </div>
      </PageWrapper>
    );
  }
}

export default Register;
