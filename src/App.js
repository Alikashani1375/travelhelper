import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [wellcome, setWellcome] = useState("");
  const [name, setName] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [role, setRole] = useState("");

  const submited = () => {
    if (name && companyname !== "") {
      setWellcome(true);
    } else {
      alert("please type something on name and company name");
    }
  };

  return (
    <Router exact>
      <div>
        {wellcome ? (
          <Navbar name={name} companyname={companyname} role={role} />
        ) : (
          <div
            className="flex flex-col text-center h-screen"
            style={{
              backgroundImage:
                "url('https://wallpaperaccess.com/download/simple-nature-1129092')",
            }}
          >
            <p className="font-serif text-6xl text-center mt-8">
              Wellcome to The Trip
            </p>
            <div className="flex flex-col w-1/4 mt-20 mx-auto bg-gray-300 p-5 rounded  font-medium">
              <label className="">YourName :</label>
              <input
                className="mt-3 p-2 border border-red rounded text-grey-darker"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="mt-3">Company :</label>
              <input
                className="mt-3 p-2  border border-red rounded text-grey-darker"
                type="text"
                onChange={(e) => setCompanyname(e.target.value)}
              />
              <select
                className="text-black mt-3 w-2/4 m-auto rounded"
                onChange={(e) => setRole(e.target.value)}
                value="Role One"
              >
                <option>Role One</option>
                <option>Role Two</option>
                <option>Role Three</option>
              </select>
              <button
                className="font-medium w-28 p-1 text-white m-auto mt-3 rounded-full"
                style={{ backgroundColor: "#353A40" }}
                onClick={submited}
              >
                submit
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
