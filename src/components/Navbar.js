import "../App.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-item">
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

      <div className="nav-item">
        <input
          className="rounded-full p-4"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="#" className="text-lg">
              Delivery area
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="" className="text-red-600 text-lg">
              {" "}
              Login/Register{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="#" className="text-lg">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
