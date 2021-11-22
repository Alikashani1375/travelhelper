import { useState } from "react";

// `http://google.com/?q=${searchValue}`
function Main() {
  const [mainland, setMainland] = useState("asia");
  const [money, setMoney] = useState("");
  const [currency, setCurrency] = useState("USD");

  const submited = () => {
    window.open(
      `https://www.google.com/search?q=where+is+the+best+place+for+travel+in+${mainland}+with+${money}+${currency}`
    );
  };

  return (
    <div
      className="flex flex-col w-full min-h-full fixed bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/images/bg1.jpg)",
      }}
    >
      <div className="mx-auto text-center text-3xl font-serif text-3xl pt-8">
        Wellcome my dear freind, i can help you to have best journey
      </div>
      <div className=" w-1/5 h-auto mx-auto text-center mt-5">
        <label class="block text-sm font-medium text-gray-700 text-xl">
          How Much You Have Money?
        </label>
        <div class="mt-1 relative rounded-md shadow-sm mt-2">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
            onChange={(e) => setMoney(e.target.value)}
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">
              Currency
            </label>
            <select
              onChange={(e) => setCurrency(e.target.value)}
              class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-8">
        <label class="block text-sm font-medium text-gray-700 text-xl">
          Which Mainland You Like?
        </label>
        <select
          onChange={(e) => setMainland(e.target.value)}
          className="text-black mt-2 w-full mx-auto rounded-full text-center"
        >
          <option>Asia</option>
          <option>Europe</option>
          <option>America</option>
        </select>
      </div>
      <button
        className="mb-3 font-medium w-28 p-1 text-white m-auto mt-3 rounded-full"
        style={{ backgroundColor: "#353A40" }}
        onClick={submited}
      >
        Submit
      </button>
      <div className="text-center flex flex-col bg-gray-300 mb-3 m-auto mt-8 rounded p-3 text-2xl">
        <div>About Me</div>
        <div>Call : +989309113021</div>
        <div>Email : s.a.s.kashani33@gmail.com</div>
      </div>
    </div>
  );
}

export default Main;
