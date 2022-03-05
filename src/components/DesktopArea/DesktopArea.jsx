import { useContext, useRef, useState } from "react";
import Draggable from "react-draggable";
import { AppContext } from "../Context/AppContext";
import "./DesktopArea.css";
import { Calculator } from "../Calculator/Calculator.jsx";
export const DesktopArea = () => {
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  const nodeRef3 = useRef(null);
  const nodeRef4 = useRef(null);
  const nodeRef5 = useRef(null);

  const [visualcode, setVisualCode] = useState(false);
  const [jioSaavn, setJioSaavn] = useState(false);

  const { showCalc } = useContext(AppContext);

  return (
    <div>
      <Draggable nodeRef2={nodeRef2}>
        <div ref={nodeRef2} className="desktopIcons" id="terminalIcon">
          <img
            src="icons/terminal.png"
            alt="terminal"
            style={{ width: "50px" }}
          ></img>
          <p>Terminal</p>
        </div>
      </Draggable>

      <Draggable nodeRef5={nodeRef5}>
        <div
          ref={nodeRef5}
          className="desktopIcons"
          id="jiosaavanIcon"
          onDoubleClick={() => setJioSaavn(!jioSaavn)}
        >
          <img
            src="icons/thehindu.png"
            alt="theHindu"
            style={{ width: "50px", borderRadius: "10px" }}
          ></img>
          <p>The Hindu</p>
        </div>
      </Draggable>

      <Draggable nodeRef3={nodeRef3}>
        <div
          ref={nodeRef3}
          onDoubleClick={() => setVisualCode(!visualcode)}
          className="desktopIcons"
          id="vscodeIcon"
        >
          <img
            src="icons/vscode.png"
            alt="terminal"
            style={{ width: "50px" }}
          ></img>
          <p>Visual Studio Code</p>
        </div>
      </Draggable>

      {visualcode ? (
        <Draggable handle="header" nodeRef1={nodeRef1}>
          <div className="box" ref={nodeRef1}>
            <header className="header">
              <div onClick={() => setVisualCode(!visualcode)}>
                <img src="icons/close.png" alt="close"></img>
              </div>
              <div>
                <img src="icons/expand.png" alt="expand"></img>
              </div>
              <div>
                <img src="icons/minimize.png" alt="minimize"></img>
              </div>
              <div>
                <p>Visual Studio Code</p>
              </div>
            </header>
            <div>
              <object
                type="text/html"
                data="https://vscode.dev/"
                width="900px"
                height="600px"
                aria-label="one"
              ></object>
            </div>
          </div>
        </Draggable>
      ) : null}

      {jioSaavn ? (
        <Draggable handle="header" nodeRef4={nodeRef4}>
          <div className="box" ref={nodeRef4}>
            <header className="header">
              <div onClick={() => setJioSaavn(!jioSaavn)}>
                <img src="icons/close.png" alt="close"></img>
              </div>
              <div>
                <img src="icons/expand.png" alt="expand"></img>
              </div>
              <div>
                <img src="icons/minimize.png" alt="minimize"></img>
              </div>
              <div>
                <p>The Hindu</p>
              </div>
            </header>
            <div>
              <object
                type="text/html"
                data="https://www.thehindu.com/news/"
                width="900px"
                height="600px"
                aria-label="tew"
              ></object>
            </div>
          </div>
        </Draggable>
      ) : null}

      {showCalc ? <Calculator></Calculator> : null}
    </div>
  );
};
