// import "../App.css";
// import Categories from "./Categories";
// import Feature from "./Feature";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import ProductCard from "./ProductCard";

// const Homepage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="home-container">
//         <div className="welcome-container">
//           <div className="hero-image">
//             <img src="https://bit.ly/40oamwt" alt="" className="hero" />
//           </div>
//           <div className="welcome-content">
//             <h1 className="font-bold text-4xl">
//               😊Welcome to the Yum Market😊
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
//               reiciendis quidem! Reprehenderit blanditiis ut id, temporibus
//               officia sed animi illo assumenda beatae. Nesciunt exercitationem
//               excepturi accusantium eos odit consequuntur libero.
//             </p>
//             <div>
//               <button className="rounded-full  w-24 p-2 bg-yellow-400 hover:bg-yellow-500">
//                 Shop now
//               </button>
//             </div>
//           </div>
//         </div>
//         <Feature />
//         <Categories />
//         <ProductCard />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Homepage;
import Navbar from "./Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="relative bg-yellow-400">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to The Yum Market
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  This is your one stop shop for All kinds of groceries. Get it
                  all here and get it fast.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/products"
                    className="rounded-md bg-yellow-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full bg-yellow-400"
            src="https://bit.ly/40oamwt"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
