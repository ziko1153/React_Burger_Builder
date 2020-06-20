import React from "react";
import classes from "./BuildControls.module.css";
import BuildControlPanel from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price {props.price}</p>
      {controls.map(ctrl => (
        <BuildControlPanel
          key={ctrl.label}
          label={ctrl.label}
          added={() => {
            props.ingredientAdded(ctrl.type);
          }}
          removed={() => {
            props.ingredientRemove(ctrl.type);
          }}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}

      <button
        disabled={!props.purchase}
        className={classes.OrderButton}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControls;