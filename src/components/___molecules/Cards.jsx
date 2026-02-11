import "./Cards.css";
import Image from "../___atoms/CardImages/images.jsx";
import Title from "../___atoms/TitleIngredients/Title.jsx";
import Numbers from "../___atoms/numbers/calories/Celsius.jsx";
import Price from "../___atoms/numbers/productPrice/Price.jsx";
import Button from "../___atoms/buttons/Button.jsx";

function Card({
  title,
  img,
  ingredients,
  first,
  second,
  third,
  newPrice,
  oldPrice,
}) {
  return (
    <div className="food_card">
      <Image src={img} alt={title} className="food_card_image" />
      <Title title={title} text={ingredients} />
      <Numbers first={first} second={second} third={third} />
      <div className="order_container">
        <Price newPrice={newPrice} oldPrice={oldPrice} />
        <Button />
      </div>
    </div>
  );
}

export default Card;
