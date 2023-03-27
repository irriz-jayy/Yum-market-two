import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="bg-cyan-800 flex min-h-[100vh]  py-4 px-4 sm:px-4 lg:px-6 flex-col">
        <div className="text-center">
          <h1 className="font-bold text-4xl">😊Welcome to the Yum Market😊</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            reiciendis quidem! Reprehenderit blanditiis ut id, temporibus
            officia sed animi illo assumenda beatae. Nesciunt exercitationem
            excepturi accusantium eos odit consequuntur libero.
          </p>
        </div>
        <h2 className="text-2xl text-center font-bold">Categories</h2>
        <div className="h-96 mt-4 flex flex-row justify-between">
          <div className="w-1/5 rounded-lg">
            <img
              src="https://bit.ly/40vhs1Z"
              alt="vegetables "
              className="h-3/4 rounded-lg"
            />
            <p className="text-center font-semibold mt-3"> Vegetables </p>
          </div>
          <div className="w-1/5 rounded-lg">
            {" "}
            <img
              src="https://bit.ly/3z9kAVv"
              alt="fruit "
              className="h-3/4 rounded-lg"
            />
            <p className="text-center font-semibold mt-3"> Fruits </p>
          </div>
          <div className="w-1/5 rounded-lg">
            {" "}
            <img
              src="https://bit.ly/3JIV1iX"
              alt="dairy "
              className="h-3/4 rounded-lg"
            />
            <p className="text-center font-semibold mt-3"> Dairy </p>
          </div>
          <div className="w-1/5 rounded-lg">
            <img
              src="https://bit.ly/42OUrJB"
              alt="meat "
              className="h-3/4 rounded-lg"
            />
            <p className="text-center font-semibold mt-3"> Meat </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
