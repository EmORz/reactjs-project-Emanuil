import React from "react";
import { register } from "../../../API/remote";
import Input from "../../common/Input";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repassword:"",
      error: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmitHandler(e) {

    e.preventDefault();

    if (this.state.password !== this.state.repassword) {
      this.setState({
        error: {
          message: "Check the form for errors",
          errors: {
            repeat: "Passwords don't match",
          },
        },
      });
      return;
    }
    const username = this.state.username;
    const password = this.state.password;

    const res = await register(username, password);

    
  }

  render() {
    let errors = null;
    if (this.state.error) {
        errors = (
            <div>
                <h2 className="errorMessage">{this.state.error.message}</h2>
                {Object.keys(this.state.error.errors).map(k => {
                    return <p key={k}>{this.state.error.errors[k]}</p>;
                })}
            </div>
        );
    }
    return (
      <div className="container">
        {errors}
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

          <Input
            name="repassword"
            type="password"
            value={this.state.repassword}
            onChange={this.onChangeHandler}
            label="Repeat password"
          />

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
