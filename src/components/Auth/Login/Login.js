import React from "react";

import Input from "../../common/Input";
import {login} from '../../../API/remote'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
}

async onSubmitHandler(e) {

  console.log(this.state)
    const res = await login(this.state.username, this.state.password);
  

    if (!res.success) {
        this.setState({error: res});
        return;
    }

         
}

  render() {

    return (
      <div className="container">
  
        <form onSubmit={this.onSubmitHandler}>
          <Input
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            label="Name"
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
