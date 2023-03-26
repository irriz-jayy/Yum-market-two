import "../App.css";

function Navbar() {
  return (
    <div className="flex flex-row  h-16  w-auto justify-between text-lg bg-cyan-600 ">
      <div className="p-2 ">
        <ul>
          <li>
            <a href="./home.html">
              <img
                className="h-12 rounded-full"
                src="https://shutr.bz/3nedtsa"
                alt="Logo"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="p-2">
        <input
          className="rounded-full"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className="p-2">
        <ul>
          <li>
            <a href="#" className="">
              Delivery area
            </a>
          </li>
        </ul>
      </div>
      <div className="p-2">
        <ul>
          <li>
            <a href="" className="text-red-600">
              {" "}
              Login/Register{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="p-2 mr-2">
        <ul>
          <li>
            <a href="#"> Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
