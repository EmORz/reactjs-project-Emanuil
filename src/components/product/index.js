import React, { Component } from "react";
import style from "./index.module.css";

const Product = ({ description, img, price, title,quantity, author, index }) => {
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
      <button className={style.button}>Купи</button>
    </div>
  );
};

export default Product;
