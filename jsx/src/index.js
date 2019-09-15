//import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";
//create a react component
const App = () => {
  const buttonText = 'Click Me!'
  return (
    <div>
      <label className="label" htmlFor="name">
        enter name{" "}
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}> {buttonText} </button>
    </div>
  );
};
//take the react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
