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
      quantity: 0,
      price: 0,

      title: "",
      img: null,
      error: false,
    };
  }
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { description, quantity, price, title, img } = this.state;
    debugger;
    if (
      quantity <= 0 &&
      price <= 0 &&
      description.length <= 0 &&
      title.length <= 0 &&
      img === null
    ) {
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Enter valid data for product!",
          },
        },
      });
      return;
    }
    if (quantity < 0 || price < 0) {
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Negative number are not accept!",
          },
        },
      });
      return;
    }
    let help = true;
    if (img === null) {
      if (window.confirm("Do you want to create product without image?")) {
        help = true;
      } else {
        help = false;
      }
    }
    if(help){
      const product = await fetch("http://localhost:9999/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, quantity, title, price, img }),
        credentials: "include",
      });
      if (product) {
        if (
          window.confirm(
            "You create successfull product! Do you want to create another?"
          )
        ) {
          window.location.reload();
        } else {
          this.props.history.push("/");
        }
      }
    }else{
      this.setState({
        error: {
          message: "Check the Form for errors",
          errors: {
            data: "Upload image!",
          },
        },
      });
      return;
    }

  };
  openWidget = (e) => {
    e.preventDefault();
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "emo-cloud",
        uploadPreset: "emanuil",
      },
      (error, result) => {
        console.log("Error", error);
        console.log("Result", result);
        if (result.event === "success") {
          this.setState({
            img: result.info.url,
          });
        }
      }
    );
    widget.open();
  };
  render() {
    const { description, quantity, price, title, img } = this.state;
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
          <Title title="Create Product" />
          <Input
            value={title}
            onChange={(e) => this.handleChange(e, "title")}
            label="Title"
            id="title"
          />
          <Input
            value={description}
            onChange={(e) => this.handleChange(e, "description")}
            label="Description"
            id="description"
          />
          <Input
            value={quantity}
            onChange={(e) => this.handleChange(e, "quantity")}
            label="Quantity"
            id="quantity"
          />
          <Input
            value={price}
            onChange={(e) => this.handleChange(e, "price")}
            label="Price"
            id="price"
          />

          <div>
            <button onClick={this.openWidget}>Upload image</button>
          </div>

          <Button title="Create" />
        </form>
        <div className={style.picture}>
          {img ? (
            <p>
              Снимката която качвате: <img width="300" height="300" src={img} />{" "}
            </p>
          ) : null}
        </div>
      </PageWrapper>
    );
  }
}

export default CreateProduct;
