import "./Calculator.css";
import Draggable from "react-draggable";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../Context/AppContext";
export const Calculator = () => {
  const nodeRef1 = useRef(null);
  const [calcVal1, setCalcVal1] = useState("");
  const [calcVal2, setCalcVal2] = useState("");
  const [total, setTotal] = useState("");
  const [key, setKey] = useState("");
  const { closeCalc } = useContext(AppContext);
  function clear() {
    setCalcVal1("");
    setCalcVal2("");
    setKey("");
    setTotal("");
  }

  function main() {
    switch (key) {
      case "+":
        setTotal(Number(calcVal1) + Number(calcVal2));
        break;
      case "-":
        setTotal(Number(calcVal1) - Number(calcVal2));
        break;
      case "%":
        setTotal(Number(calcVal1) * (Number(calcVal2) / 100));
        break;
      case "/":
        setTotal(Number(calcVal1) / Number(calcVal2));
        break;
      case "x":
        setTotal(Number(calcVal1) * Number(calcVal2));
        break;

      default:
        break;
    }
  }
  return (
    <div id="calculatorMainInterface">
      <Draggable handle="header" nodeRef1={nodeRef1}>
        <div ref={nodeRef1}>
          <header id="topbar">
            <div onClick={closeCalc}>
              <img src="icons/close.png" alt="close"></img>
            </div>
            <div>
              <img src="icons/expand.png" alt="expand"></img>
            </div>
            <div>
              <img src="icons/minimize.png" alt="minimize"></img>
            </div>
          </header>
          <div id="calcMainbody">
            <div>
              <p>{total.toLocaleString() || calcVal1 + key + calcVal2}</p>
            </div>
            <div onClick={() => clear()}>c</div>
            <div>+/-</div>
            <div
              onClick={() => {
                setKey("%");
              }}
            >
              %
            </div>
            <div
              onClick={() => {
                setKey("/");
              }}
            >
              /
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "7");
                } else {
                  setCalcVal1((x) => x + "7");
                }
              }}
            >
              7
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "8");
                } else {
                  setCalcVal1((x) => x + "8");
                }
              }}
            >
              8
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "9");
                } else {
                  setCalcVal1((x) => x + "9");
                }
              }}
            >
              9
            </div>
            <div
              onClick={() => {
                setKey("x");
              }}
            >
              x
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "4");
                } else {
                  setCalcVal1((x) => x + "4");
                }
              }}
            >
              4
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "5");
                } else {
                  setCalcVal1((x) => x + "5");
                }
              }}
            >
              5
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "6");
                } else {
                  setCalcVal1((x) => x + "6");
                }
              }}
            >
              6
            </div>
            <div
              onClick={() => {
                setKey("-");
              }}
            >
              -
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "1");
                } else {
                  setCalcVal1((x) => x + "1");
                }
              }}
            >
              1
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "2");
                } else {
                  setCalcVal1((x) => x + "2");
                }
              }}
            >
              2
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "3");
                } else {
                  setCalcVal1((x) => x + "3");
                }
              }}
            >
              3
            </div>
            <div
              onClick={() => {
                setKey("+");
              }}
            >
              +
            </div>
            <div
              onClick={() => {
                if (key) {
                  setCalcVal2((x) => x + "0");
                } else {
                  setCalcVal1((x) => x + "0");
                }
              }}
            >
              0
            </div>
            <div>.</div>
            <div onClick={main}>=</div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};
