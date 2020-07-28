import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import Input from "../../components/Input";
import Button from "../../components/button/submit-button";
import style from "./index.module.css";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
   // const { description } = this.state;
    //ToDo -> create post request
    debugger;
    const promise = await fetch('http://localhost:9999/api/product', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...this.state}),
      credentials: 'include'
    });

  };
  render() {
    const { description } = this.state;
    return (
      <PageWrapper>
        <form className={style.container} onSubmit={this.handleSubmit}>
          <Title title="Create Product" />
          <Input
            value={description}
            onChange={(e) => this.handleChange(e, "description")}
            label="Description"
            id="description"
          />

          <Button title="Create" />
        </form>
      </PageWrapper>
    );
  }
}

export default CreateProduct;
