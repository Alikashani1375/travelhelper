function Hamburger(props) {
  const closediv = () => {
    props.divoff(false);
  };

  return (
    <div className="flex flex-col items-start h-full fixed top-0 left-3/4 right-0 justify-center w-1/4 bg-gray-200">
      <div className=" ml-auto ">
        <button onClick={closediv}>
          <img
            className="mr-3 mt-3"
            src={process.env.PUBLIC_URL + "/images/close.png"}
            width="50"
            alt="logo"
          />
        </button>
      </div>
      <div className="mt-3 mx-auto">
        <img
          className="rounded-full"
          src={process.env.PUBLIC_URL + "/images/profile2.jpg"}
          width="200"
          alt="logo"
        />
      </div>
      <div
        className="mx-auto mt-16 w-full text-right p-3 text-white font-serif text-xl "
        style={{ backgroundColor: "#353A40" }}
      >
        <a href="#">About Us</a>
      </div>
      <div
        className="mx-auto  mt-3 w-full text-right p-3 text-white font-serif text-xl "
        style={{ backgroundColor: "#353A40" }}
      >
        <a href="#">About Us</a>
      </div>
      <div
        className="mx-auto mb-auto mt-3 w-full text-right p-3 text-white font-serif text-xl "
        style={{ backgroundColor: "#353A40" }}
      >
        <a href="#">About Us</a>
      </div>
    </div>
  );
}
export default Hamburger;
