import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/BuildControls/BuildControls";

import Modal from "../../components/UI/Modal/Modal";

import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    showModal: false,
    purchasable: false,
  };

  updatePurchasable = () => {
    const ingredients = {
      ...this.state.ingredients,
    };

    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = type => {
    this.setState(
      {
        ingredients: {
          ...this.state.ingredients,
          [type]: this.state.ingredients[type] + 1,
        },
        totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
      },
      () => {
        this.updatePurchasable();
      }
    );
  };

  removeIngredientHandler = type => {
    let removeCount = this.state.ingredients[type] - 1;
    this.setState(
      {
        ingredients: {
          ...this.state.ingredients,
          [type]: removeCount,
        },
        totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
      },
      () => {
        this.updatePurchasable();
      }
    );
  };

  showModalHandler = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  purchaseContinueHandler = () => {
    alert("Hey Thanks For Purchasing ");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
    return (
      <>
        <Modal show={this.state.showModal} clicked={this.showModalHandler}>
          <OrderSummary
            price={this.state.totalPrice.toFixed(2)}
            ingredients={this.state.ingredients}
            cancel={this.showModalHandler}
            continue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ordered={this.showModalHandler}
          price={this.state.totalPrice.toFixed(2)}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchase={this.state.purchasable}
        />
      </>
    );
  }
}

export default BurgerBuilder;
