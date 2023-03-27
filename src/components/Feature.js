function Feature() {
  return (
    <div className="h-80  flex justify-between p-2">
      <div className=" flex w-3/12 flex-col">
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
        <div>
          <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400">
            Read more
          </button>
        </div>
      </div>
      <div className=" flex w-3/12 flex-col">
        <img
          src="http://via.placeholder.com/350x100"
          alt="feature"
          className="h-1/2"
        />
        <h2 className="text-center font-black ">Quick delivery</h2>
        <p className="text-center ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          accusantium qui laudantium deserunt debitis dolorem
        </p>
        <div>
          <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400">
            Read more
          </button>
        </div>
      </div>
      <div className=" flex w-3/12  flex-col">
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
        <div>
          <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
