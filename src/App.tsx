import React from "react";
import "./App.css";

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = {
  "+": "plus",
  "-": "minus",
};
let result = 0;
function App() {
  const [firstValue, setFirstValue] = React.useState("");
  const [secondValue, setSecondValue] = React.useState("0");
  const [inputValue, setInputValue] = React.useState(firstValue);
  const [inputOperator, setOperator] = React.useState("0");

  const onOperatorHandler = (operator: string) => {
    let num = +inputValue;
    let str = num.toString();
    setFirstValue(str);
    switch (operator) {
      case "plus":
        setOperator("+");
        break;
      case "minus":
        setOperator("-");
        break;
      default:
        break;
    }
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
        <div className="numbers">
          {numbersList.map((item) => (
            <button
              key={item}
              onClick={() => {
                setInputValue(inputValue + item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        {Object.entries(operators).map(([key, value]) => (
          <button
            key={value}
            onClick={() => {
              onOperatorHandler(value);
              setInputValue("");
            }}
          >
            {key}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          result = count();
          setInputValue("");
        }}
      >
        =
      </button>

      <div>{result}</div>
    </div>
  );
}

export default App;
