import React, { Component } from "react";
import style from "./index.module.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityP: 0,
    };
  }
  makePurchase = async (e) => {
    e.preventDefault();
    //ToDo make purchase logic

    const { quantityP } = this.state;

    const temp = +quantityP;

    const {
      quantity,
      _id,
      author,
      price,
      img,
      title,
      description,
    } = this.props;
    debugger;

    const currentQuantity = quantity - temp;
    const bill = price * temp

    if (currentQuantity > 0) {
      const updateProduct = await fetch(
        "http://localhost:9999/api/product/" + _id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            title,
            quantity: quantity - temp,
            img,
            description,
            author,
            _id,
            price,
          }),
        }
      );

      if(window.confirm(`You successfull pay ${bill} for ${title}! Have a nice day!`)){        
        window.location.reload()
       }else{
        window.location.reload()
      }
    }

    debugger;
  };

  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  };

  render() {
    const {
      description,
      img,
      price,
      title,
      quantity,
      author,
      index,
    } = this.props;

    const { quantityP } = this.state;

    return (
      <div className={style.container}>
        <div>
          <h1>
            Заглавие: <br />
            <u>{title}</u>
          </h1>
        </div>
        <div>
          <p>
            <u>Описание:</u> {description}
          </p>
        </div>
        <div>
          <img src={img} alt="Product image" width="200" height="200" />
        </div>
        <div>
          <u>Цена:</u> {price} лв
        </div>
        <div>
          <p>
            <u>Налично количество:</u>
          </p>
          {quantity} бр.
        </div>
        <label>Количество за поръчка:</label>

        <input
          value={quantityP}
          onChange={(e) => this.handleChange(e, "quantityP")}
          type="number"
          id="quantityP"
        />
        <button onClick={this.makePurchase} className={style.button}>
          Купи
        </button>
      </div>
    );
  }
}

export default Product;
