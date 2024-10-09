import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const hanldeCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button></button>
          <button onClick={handleClear}>AC</button>
          <button onClick={() => handleButtonClick("%")}>%</button>
          <button onClick={() => handleButtonClick("/")} className="operator">
            /
          </button>

          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("*")} className="operator">
            *
          </button>

          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("-")} className="operator">
            -
          </button>

          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("+")} className="operator">
            +
          </button>
        </div>
        <div className="bottom">
          <button className="zero" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button className="operator" onClick={hanldeCalculate}>
            =
          </button>
          <button className="operator" onClick={() => handleButtonClick(".")}>
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
