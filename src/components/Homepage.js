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
      </div>
    </>
  );
};

export default Homepage;
