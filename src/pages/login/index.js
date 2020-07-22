import React, { Component } from "react";
import style from "./index.module.css";
import Button from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";
import {login} from '../../API/remote'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password:''
    };
    this.onClick = this.onClick.bind(this)
  }
  async onClick(e){

    e.preventDefault()

    const res = await login(this.state.username, this.state.password)

    if(res){
      console.log('Success! Login')
      this.props.history.push('/')
    }

    console.log('login Here ->', this.state)
  }
  onChange = (event, type) =>{
      const newState = {}
      console.log(event.target.value)
      newState[type] = event.target.value
      this.setState(newState)
  }
  render() {
      const {username, password} = this.state
      
    return (
      <PageWrapper>
        <div className={style.container}>
          <Title title="Login" />
          <Input value={username} onChange={(e) => this.onChange(e, 'username')} label="Username" id="username" />

          <Input value={password} onChange={(e) => this.onChange(e, 'password')} label="Password" id="password" />
          
          <Button onClick={this.onClick} title="Login" />
        </div>
      </PageWrapper>
    );
  }
}

export default Login;
