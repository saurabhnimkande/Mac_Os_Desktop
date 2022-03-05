import "./Navbar.css";
export const Navbar = () => {
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
          <p>{Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
