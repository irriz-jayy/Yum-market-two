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
