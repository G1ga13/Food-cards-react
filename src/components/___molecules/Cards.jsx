import "./Cards.css";
import Image from "../___atoms/CardImages/images.jsx";
import Title from "../___atoms/TitleIngredients/Title.jsx";

function Card({ title, img, ingredients }) {
  return (
    <div className="food_card">
      <Image src={img} alt={title} className="food_card_image" />
      <Title>{title}</Title>
      <Text>{ingredients}</Text>
    </div>
  );
}

export default Card;
