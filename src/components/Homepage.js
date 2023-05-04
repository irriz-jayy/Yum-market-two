import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

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
      <ProductCard />
      <div className="my-4 w-100vw flex items-center justify-center">
        <a
          href="/products"
          className="relative flex items-center justify-center rounded-md border border-transparent bg-yellow-300 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          View all products
        </a>
      </div>
      <Footer />
    </>
  );
}
