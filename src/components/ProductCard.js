const products = [
  {
    imageSrc: "https://bit.ly/40rN8pf",
    name: "Milk",
    price: "65.00/piece",
  },

  {
    imageSrc: "https://bit.ly/42UZCrm",
    name: "Red cabbage",
    price: "30.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3MclRmq",
    name: "Lettuce",
    price: "50.00/kg",
  },
  {
    imageSrc: "https://bit.ly/40wRsnm",
    name: "Carrots",
    price: "35.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3lO22Y9",
    name: "Beef lean cuts",
    price: "180.00/kg",
  },

  {
    imageSrc: "https://bit.ly/40l6mwV",
    name: "Skimmed milk",
    price: "90.00/litre",
  },

  {
    imageSrc: "https://bit.ly/40ADGAk",
    name: "Pineapples",
    price: "40.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3Kkptl1",
    name: "Avocados",
    price: "40.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3M2Zujq",
    name: "Apples",
    price: "35.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3JVKlhm",
    name: "Tomatoes",
    price: "160.00/kg",
  },

  {
    imageSrc: "https://bit.ly/40tsVzD",
    name: "White onions",
    price: "130.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3Zuy8pm",
    name: "Red onions",
    price: "100.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3G01PIb",
    name: "Grapes",
    price: "180.00/kg",
  },
  {
    imageSrc: "https://bit.ly/42Yk76s",
    name: "Cucumber",
    price: "40.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3KrSgnS",
    name: "Mince meat",
    price: "240.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3zsDCGC",
    name: "Chicken",
    price: "140.00/kg",
  },
  {
    imageSrc: "https://bit.ly/40HfYT2",
    name: "Eggs",
    price: "360.00/tray",
  },
  {
    imageSrc: "https://bit.ly/3ntOdOP",
    name: "Capsicum red",
    price: "40.00/kg",
  },

  {
    imageSrc: "https://bit.ly/432VqWD",
    name: "Capsicum green",
    price: "40.00/kg",
  },

  {
    imageSrc: "https://bit.ly/3Krw2SU",
    name: "Spinach",
    price: "40.00/pack",
  },

  {
    imageSrc: "https://bit.ly/3zxeG0B",
    name: "Potato",
    price: "200.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3U2RZuJ",
    name: "Berries",
    price: "40.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3Kun5bO",
    name: "Cherries",
    price: "160.00/kg",
  },
  {
    imageSrc: "https://bit.ly/40Tlr8L",
    name: "Lemon",
    price: "50.00/kg",
  },
  {
    imageSrc: "https://bit.ly/40MVCra",
    name: "Ginger",
    price: "40.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3nzOjVf",
    name: "Garlic",
    price: "20.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3Kp71b8",
    name: "Watermelon",
    price: "100.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3lWQMsy",
    name: "Matoke banana",
    price: "70.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3JWg1mE",
    name: "Pawpaw",
    price: "50.00/kg",
  },
  {
    imageSrc: "https://bit.ly/40Snv0T",
    name: "Leeks",
    price: "40.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3zsPfh0",
    name: "Eggplant",
    price: "40.00/kg",
  },

  {
    imageSrc: "https://bit.ly/40MW1da",
    name: "Red chilli",
    price: "25.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3U5vR2M",
    name: "Green chilli",
    price: "40.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3ZB6h7b",
    name: "Pears",
    price: "50.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3GcRKI1",
    name: "Mangoes",
    price: "40.00/kg",
  },
  {
    imageSrc: "https://bit.ly/3M5qAqe",
    name: "Dates",
    price: "140.00/kg",
  },
];

export default function Example() {
  return (
    <div className="bg-yellow-400">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl text-center font-bold text-gray-900">
          Buy products
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to cart<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 w-100vw flex items-center justify-center">
        <a
          href=""
          className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          View all products
        </a>
      </div>
    </div>
  );
}
