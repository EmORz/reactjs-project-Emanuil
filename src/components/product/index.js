import React, { Component } from "react";
import style from "./index.module.css";

class Product extends Component  {
constructor(props){
  super(props)
  this.state={
    quantityP: 0
  }
}
  makePurchase = (e)=>{
    e.preventDefault()
//ToDo make purchase logic
    console.log(this.state.quantityP)

  }
  handleChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  }

  render(){
    const{
      description, img, price, title,quantity, author, index 
    } = this.props
    
    const {
      quantityP
    } = this.state;

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
        <div><u>Цена:</u> {price} лв</div>
        <div>
          <p><u>Налично количество:</u></p>
  {quantity} бр.
        </div>
        <label>Количество за поръчка:</label>

        <input
        value={quantityP}
        onChange={(e) => this.handleChange(e, "quantityP")}
          type="number"
          id="quantityP"
        />
        <button onClick={this.makePurchase} className={style.button}>Купи</button>
      </div>
    );
  }
  

};

export default Product;
