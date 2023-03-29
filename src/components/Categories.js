import "../App.css";

const lists = [
  {
    id: 1,
    image: "http://via.placeholder.com/450x300",
    name: "Fresh vegetables",
  },
  { id: 2, image: "http://via.placeholder.com/450x300", name: "Fresh fruit" },
  { id: 3, image: "http://via.placeholder.com/450x300", name: "Fresh meat" },
];

const Categories = () => {
  return (
    <>
      <div className="categories-header">
        <p>Our features</p>
      </div>
      <div className="categories-container" >
        {lists.map((item)=>(
            <div className="category-card">
            <img
              src={item.image}
              alt="vegetables "
              className="category-image"
            />
            <div className="category-name">
              <p className=""> {item.name} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
