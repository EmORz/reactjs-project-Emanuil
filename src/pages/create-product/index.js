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
      imageUrl: "",
      title: "",
      img: null
    };
  }
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { description, quantity, price, img } = this.state;
debugger
    console.log(description, quantity, price, img)
    debugger
      await fetch("http://localhost:9999/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({description, quantity, price, img}),
      credentials: "include",
    });
  };
  openWidget=(e)=>{
    e.preventDefault()
    const widget = window.cloudinary.createUploadWidget({
      cloudName: 'emo-cloud',
      uploadPreset: "emanuil"
    }, (error, result)=>{
      console.log('Error', error)
      console.log('Result', result)
      if(result.event==="success"){
        this.setState({
          img: result.info.url
        })
      }
    })
    widget.open()
  }
  render() {
    const { description, quantity, price, imageUrl, title, img } = this.state;
    return (
      <PageWrapper>
        <button onClick={this.openWidget}>Upload image</button>
        {img?(<img src={img}/>):null}


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
          {/* <Input
            value={imageUrl}
            onChange={(e) => this.handleChange(e, "imageUrl")}
            label="Image"
            id="image"
          /> */}


          <Button title="Create" />
        </form>

      </PageWrapper>
    );
  }
}

export default CreateProduct;
