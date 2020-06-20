import React from "react";
import Button from "../UI/Button/Button";

const OrderSummary = props => {
  const ingredientList = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order Summary</h3>
      <p>A Delicious Burger With The Following Ingredients </p>
      <ul>{ingredientList}</ul>
      <p>
        <stron>Total Price : {props.price}</stron>
      </p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
