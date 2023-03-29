import "../App.css";

const Categories = () => {
  return (
    <>
      <div className="categories-header">
        <p>Our features</p>
      </div>
      <div className="categories-container">
        <div className="category-card">
          <img
            src="http://via.placeholder.com/450x300"
            alt="vegetables "
            className="category-image"
          />
          <div className="category-name">
            <p className=""> Fresh vegetables </p>
          </div>
        </div>
        <div className="category-card">
          <img
            src="http://via.placeholder.com/450x300"
            alt="fruit "
            className="category-image"
          />
          <div className="category-name">
            <p className=""> Fresh fruit</p>
          </div>
        </div>
        <div className="category-card">
          <img
            src="http://via.placeholder.com/450x300"
            alt="dairy "
            className="category-image"
          />
          <div className="category-name">
            <p className=""> Fresh dairy</p>
          </div>
        </div>
        <div className="category-card">
          <img
            src="http://via.placeholder.com/450x300"
            alt="meat "
            className="category-image"
          />
          <div className="category-name">
            <p className=""> Fresh meats </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
