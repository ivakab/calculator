import React, { useEffect } from "react";
import "./App.css";

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = {
  "+": "plus",
  "-": "minus",
};

function App() {
  const [firstValue, setFirstValue] = React.useState("0");
  const [secondValue, setSecondValue] = React.useState("0");
  const [inputValue, setInputValue] = React.useState(firstValue);
  const [inputOperator, setOperator] = React.useState("0");

  const onOperatorHandler = (operator: string) => {
    setFirstValue(inputValue);

    setOperator(operator);

    setInputValue("");
  };

  const count = () => {
    let a = +inputValue;
    let b = +firstValue;
    if (inputOperator == "+") return b + a;
    else return b - a;
  };

  return (
    <div className="App">
      <div className="calculator">
        <input value={inputValue} />
        <div className="allBtns">
          <div className="numbers">
            {numbersList.map((item) => (
              <button
                className="btn"
                key={item}
                onClick={() => {
                  if (inputValue === "0") {
                    setInputValue(`${item}`);
                  } else setInputValue(inputValue + item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          {Object.entries(operators).map(([key, value]) => (
            <button
              className="operators"
              key={value}
              onClick={() => {
                onOperatorHandler(key);
              }}
            >
              {key}
            </button>
          ))}

          <button
            className="operators"
            onClick={() => {
              setInputValue(`${count()}`);
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
