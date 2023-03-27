import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-cyan-800 flex min-h-[100vh]  flex-col">
        <div className="h-96  flex justify-center flex-col text-center bg-[url('https://bit.ly/3nrTmqy')] bg-cover">
          <h1 className="font-bold text-4xl">😊Welcome to the Yum Market😊</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            reiciendis quidem! Reprehenderit blanditiis ut id, temporibus
            officia sed animi illo assumenda beatae. Nesciunt exercitationem
            excepturi accusantium eos odit consequuntur libero.
          </p>
          <div>
            <button className="rounded-full  w-24 p-2 bg-yellow-400 hover:bg-yellow-500">
              Shop now
            </button>
          </div>
        </div>
        <div className="h-24  text-center">
          <p className="font-bold text-2xl p-4">Our features</p>
        </div>
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
      </div>
    </>
  );
};

export default Homepage;
