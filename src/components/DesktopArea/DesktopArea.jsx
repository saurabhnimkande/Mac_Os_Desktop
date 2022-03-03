import { useRef, useState } from "react";
import Draggable from "react-draggable";
import "./DesktopArea.css";
export const DesktopArea = () => {
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  const nodeRef3 = useRef(null);
  const nodeRef4 = useRef(null);
  const nodeRef5 = useRef(null);

  const [visualcode, setVisualCode] = useState(false);
  const [jioSaavn, setJioSaavn] = useState(false);
  return (
    <div>
      {visualcode ? (
        <Draggable handle="header" nodeRef1={nodeRef1}>
          <div className="box" ref={nodeRef1}>
            <header id="header">
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
            <header id="header">
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
                <p>Jio Saavn</p>
              </div>
            </header>
            <div>
              <object
                type="text/html"
                data="https://www.jiosaavn.com/"
                width="900px"
                height="600px"
                aria-label="tew"
              ></object>
            </div>
          </div>
        </Draggable>
      ) : null}

      <Draggable nodeRef2={nodeRef2} positionOffset={{ x: 1420, y: 10 }}>
        <div ref={nodeRef2} className="desktopIcons">
          <img
            src="icons/terminal.png"
            alt="terminal"
            style={{ width: "50px" }}
          ></img>
          <p>Terminal</p>
        </div>
      </Draggable>

      <Draggable nodeRef5={nodeRef5} positionOffset={{ x: 1420, y: 25 }}>
        <div
          ref={nodeRef5}
          className="desktopIcons"
          onDoubleClick={() => setJioSaavn(!jioSaavn)}
        >
          <img
            src="icons/JioSaavnLogo.png"
            alt="terminal"
            style={{ width: "50px", borderRadius: "10px" }}
          ></img>
          <p>Jio Saavn</p>
        </div>
      </Draggable>

      <Draggable nodeRef3={nodeRef3} positionOffset={{ x: 1420, y: 30 }}>
        <div
          ref={nodeRef3}
          onDoubleClick={() => setVisualCode(!visualcode)}
          className="desktopIcons"
        >
          <img
            src="icons/vscode.png"
            alt="terminal"
            style={{ width: "50px" }}
          ></img>
          <p>Visual Studio Code</p>
        </div>
      </Draggable>
    </div>
  );
};
