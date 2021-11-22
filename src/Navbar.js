import Main from "./Main";
import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar(props) {
  const [show, setShow] = useState(false);
  const hamburgeron = () => {
    setShow(true);
  };

  return (
    <div>
      <div
        className="w-full relative p-3 content-center text-white flex items-center"
        style={{ backgroundColor: "#353A40" }}
      >
        <div className="flex flex-col text-center ml-3">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            width="50"
            alt="logo"
          />
          <p className="text-xl font-semibold">{props.companyname}</p>
        </div>
        <div className="flex flex-row ml-auto text-right">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Hello {props.name}</p>
            <p>{props.role}</p>
          </div>
          <img
            className="border rounded-full ml-3"
            src={process.env.PUBLIC_URL + "/images/profile.png"}
            width="50"
            alt="logo"
          />
          <div className="ml-3">
            <button onClick={hamburgeron}>
              <img
                className="border bg-white ml-3"
                src={process.env.PUBLIC_URL + "/images/hamburger.jpg"}
                width="30"
                alt="logo"
              />
            </button>
          </div>
        </div>
      </div>

      <Main />
      {show ? <Hamburger divoff={setShow} /> : null}
    </div>
  );
}
export default Navbar;
