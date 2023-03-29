import "../App.css";

function Feature() {
  return (
    <>
      <div className="feature-header">
        <p>Our features</p>
      </div>
      <div className="feature-container">
        <div className=" feature-card">
          <img
            src="http://via.placeholder.com/350x100"
            alt="feature"
            className="h-1/2"
          />
          <h2 className="text-center font-black ">Fresh and Organic</h2>
          <p className="text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            accusantium qui laudantium deserunt debitis dolorem
          </p>
          <div className="feature-button">
            <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400">
              Read more
            </button>
          </div>
        </div>
        <div className=" feature-card">
          <img
            src="http://via.placeholder.com/350x100"
            alt="feature"
            className="h-1/2"
          />
          <h2 className="text-center font-black ">Quick</h2>
          <p className="text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            accusantium qui laudantium deserunt debitis dolorem
          </p>
          <div className="feature-button">
            <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400">
              Read more
            </button>
          </div>
        </div>
        <div className=" feature-card">
          <img
            src="http://via.placeholder.com/350x100"
            alt="feature"
            className="h-1/2"
          />
          <h2 className="text-center font-black ">Easy payments</h2>
          <p className="text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            accusantium qui laudantium deserunt debitis dolorem
          </p>
          <div className="feature-button">
            <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
