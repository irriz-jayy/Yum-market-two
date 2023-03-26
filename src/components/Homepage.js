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
          <div className="h-full border border-black w-1/5"></div>
          <div className="h-full border border-black w-1/5"></div>
          <div className="h-full border border-black w-1/5"></div>
          <div className="h-full border border-black w-1/5"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
