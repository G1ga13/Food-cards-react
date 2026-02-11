import "./Cards.css";
import Image from "../___atoms/CardImages/images.jsx";
import Title from "../___atoms/TitleIngredients/Title.jsx";
import Numbers from "../___atoms/numbers/calories/Celsius.jsx";

function Card({ title, img, ingredients, first, second, third }) {
  return (
    <div className="food_card">
      <Image src={img} alt={title} className="food_card_image" />
      <Title title={title} text={ingredients} />
      <Numbers first={first} second={second} third={third} />
    </div>
  );
}

export default Card;
