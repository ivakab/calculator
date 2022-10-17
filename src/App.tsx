import React, { useEffect } from "react";
import "./App.css";

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = {
  // "+": "plus",
  // "-": "minus",
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
};

type OperatorType = keyof typeof operators;
function App() {
  const [firstValue, setFirstValue] = React.useState("0");
  const [secondValue, setSecondValue] = React.useState("0");
  const [inputValue, setInputValue] = React.useState(firstValue);
  const [inputOperator, setOperator] = React.useState<OperatorType | null>(
    null
  );

  const onOperatorHandler = (operator: OperatorType) => {
    setFirstValue(inputValue);

    setOperator(operator);

    setInputValue("");
  };

  const count = () => {
    if (!inputOperator) {
      return;
    }
    let a = +inputValue;
    let b = +firstValue;
    return operators[inputOperator](b, a);
    // if (inputOperator === "+") return b + a;
    // else return b - a;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="input">
          <input value={inputValue} />
        </div>
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
          <div className="actions">
            {Object.entries(operators).map(([key, value]) => (
              <button
                className="operators"
                key={key}
                onClick={() => {
                  // @ts-ignore
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
    </div>
  );
}

export default App;
