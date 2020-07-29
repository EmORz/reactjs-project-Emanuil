import React from "react";
import style from './submit-button.module.css'

const SubmitButton = ({ title }) => {

  return (<button className={style.submit} type="submit" >{title}</button>)      

};
export default SubmitButton;
