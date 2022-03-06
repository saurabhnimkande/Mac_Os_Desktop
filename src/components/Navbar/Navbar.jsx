import { useEffect, useState } from "react";
import "./Navbar.css";
export const Navbar = () => {
  function getDate() {
    let value = new Date();
    let generalData = Date().toLocaleString().split(" ");
    let str =
      generalData[0] +
      " " +
      generalData[1] +
      " " +
      generalData[2] +
      " " +
      value.getHours() +
      ":" +
      value.getMinutes();

    setDate(str);
  }

  const [date, setDate] = useState(null);

  useEffect(() => {
    getDate();
  }, []);

  useEffect(() => {
    let time = setInterval(() => {
      getDate();
    }, 1000 * 60);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div id="navbarDiv">
      <div>
        <div>
          <img src="icons/appleLogo.png" alt="apple_logo"></img>
        </div>
        <div>
          <p>Finder</p>
        </div>
        <div>
          <p>File</p>
        </div>
        <div>
          <p>Edit</p>
        </div>
        <div>
          <p>View</p>
        </div>
        <div>
          <p>Go</p>
        </div>
        <div>
          <p>Window</p>
        </div>
        <div>
          <p>Help</p>
        </div>
      </div>
      <div>
        <div>
          <img src="icons/battry.png" alt="apple_logo"></img>
        </div>
        <div>
          <img src="icons/wifi.png" alt="apple_logo"></img>
        </div>
        <div>
          <img src="icons/search.png" alt="apple_logo"></img>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
