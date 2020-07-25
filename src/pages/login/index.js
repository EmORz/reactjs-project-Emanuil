import React, { Component } from "react";
import style from "./index.module.css";
import Button from "../../components/button/submit-button";
import Title from "../../components/title";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/Input";
import { login } from "../../API/remote";
import authenticate from "../../utils/authenticate";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    debugger;

    //const test = await login(username, password)

    fetch('http://localhost:9999/api/user/login',{
      method:"POST",
      body: JSON.stringify({
        username, password
      }),
      headers: {'Content-Type': 'application/json'}
    }).then(promisse =>{

      const authToken = promisse.headers.get('Authorization')
      document.cookie = 'x-auth-token='+authToken

      this.props.history.push('/')
      
      return promisse.json()

    }
     

      
    ).then(data=>{
      console.log(data)
    })

    
    // await authenticate(
    //   "http://localhost:9999/api/user/login",
    //   {
    //     username, 
    //     password,
    //   },
    //   () => {
    //     console.log("Yeyyy");
    //     this.props.history.push("/");
    //   },(e)=>{
    //     console.log('Érror', e)
    //   }
    // );


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
