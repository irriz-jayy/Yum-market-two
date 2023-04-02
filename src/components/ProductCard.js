import "../App.css";

const produce = [
  {
    image: "https://bit.ly/40rN8pf",
    name: "Milk",
    price: "65.00/piece",
  },

  {
    image: "https://bit.ly/42UZCrm",
    name: "Red cabbage",
    price: "30.00/kg",
  },

  {
    image: "https://bit.ly/3MclRmq",
    name: "Lettuce",
    price: "50.00/kg",
  },
  {
    image: "https://bit.ly/40wRsnm",
    name: "Carrots",
    price: "35.00/kg",
  },

  {
    image: "https://bit.ly/3lO22Y9",
    name: "Beef lean cuts",
    price: "180.00/kg",
  },

  {
    image: "https://bit.ly/40l6mwV",
    name: "Skimmed milk",
    price: "90.00/litre",
  },

  {
    image: "https://bit.ly/40ADGAk",
    name: "Pineapples",
    price: "40.00/kg",
  },

  {
    image: "https://bit.ly/3Kkptl1",
    name: "Avocados",
    price: "40.00/kg",
  },

  {
    image: "https://bit.ly/3M2Zujq",
    name: "Apples",
    price: "35.00/kg",
  },

  {
    image: "https://bit.ly/3JVKlhm",
    name: "Tomatoes",
    price: "160.00/kg",
  },

  {
    image: "https://bit.ly/40tsVzD",
    name: "White onions",
    price: "130.00/kg",
  },

  {
    image: "https://bit.ly/3Zuy8pm",
    name: "Red onions",
    price: "100.00/kg",
  },

  {
    image: "https://bit.ly/3G01PIb",
    name: "Grapes",
    price: "180.00/kg",
  },
  {
    image: "https://bit.ly/42Yk76s",
    name: "Cucumber",
    price: "40.00/kg",
  },

  {
    image: "https://bit.ly/3KrSgnS",
    name: "Mince meat",
    price: "240.00/kg",
  },

  {
    image: "https://bit.ly/3zsDCGC",
    name: "Chicken",
    price: "140.00/kg",
  },
  {
    image: "https://bit.ly/40HfYT2",
    name: "Eggs",
    price: "360.00/tray",
  },
  {
    image: "https://bit.ly/3ntOdOP",
    name: "Capsicum red",
    price: "40.00/kg",
  },

  {
    image: "https://bit.ly/432VqWD",
    name: "Capsicum green",
    price: "40.00/kg",
  },

  {
    image: "https://bit.ly/3Krw2SU",
    name: "Spinach",
    price: "40.00/pack",
  },

  {
    image: "https://bit.ly/3zxeG0B",
    name: "Potato",
    price: "200.00/kg",
  },
  {
    image: "https://bit.ly/3U2RZuJ",
    name: "Berries",
    price: "40.00/kg",
  },
  {
    image: "https://bit.ly/3Kun5bO",
    name: "Cherries",
    price: "160.00/kg",
  },
  {
    image: "https://bit.ly/40Tlr8L",
    name: "Lemon",
    price: "50.00/kg",
  },
  {
    image: "https://bit.ly/40MVCra",
    name: "Ginger",
    price: "40.00/kg",
  },
  {
    image: "https://bit.ly/3nzOjVf",
    name: "Garlic",
    price: "20.00/kg",
  },
  {
    image: "https://bit.ly/3Kp71b8",
    name: "Watermelon",
    price: "100.00/kg",
  },
  {
    image: "https://bit.ly/3lWQMsy",
    name: "Matoke banana",
    price: "70.00/kg",
  },
  {
    image: "https://bit.ly/3JWg1mE",
    name: "Pawpaw",
    price: "50.00/kg",
  },
  {
    image: "https://bit.ly/40Snv0T",
    name: "Leeks",
    price: "40.00/kg",
  },
  {
    image: "https://bit.ly/3zsPfh0",
    name: "Eggplant",
    price: "40.00/kg",
  },

  {
    image: "https://bit.ly/40MW1da",
    name: "Red chilli",
    price: "25.00/kg",
  },
  {
    image: "https://bit.ly/3U5vR2M",
    name: "Green chilli",
    price: "40.00/kg",
  },
  {
    image: "https://bit.ly/3ZB6h7b",
    name: "Pears",
    price: "50.00/kg",
  },
  {
    image: "https://bit.ly/3GcRKI1",
    name: "Mangoes",
    price: "40.00/kg",
  },
  {
    image: "https://bit.ly/3M5qAqe",
    name: "Dates",
    price: "140.00/kg",
  },
];

const ProductCard = () => {
  return (
    <>
      <div className="products-header">
        <p>Buy products</p>
      </div>
      <div className="product-container">
        {produce.map((item) => (
          <div className="product-card">
            <img src={item.image} alt="vegetables " className="product-image" />
            <div className="product-name">
              <p className=""> {item.name} </p>
            </div>
            <div className="product-name">
              <p className=""> {item.price} </p>
            </div>
            <div className="product-button">
              <button className="rounded m-2 p-2 bg-slate-200 hover:bg-slate-400 ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
