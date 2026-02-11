import "./Price.css";

function Price({ newPrice, oldPrice }) {
  return (
    <div className="price">
      <span className="new_price">{newPrice}</span>
      <span className="old_price">{oldPrice}</span>
    </div>
  );
}

export default Price;
