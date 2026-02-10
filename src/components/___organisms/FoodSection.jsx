import "./FoodSection.css";
import Card from "../___molecules/Cards";
import Pizza from "../../assets/images/pizza.jpg";
import Cake from "../../assets/images/cake.jpg";
import Tortellini from "../../assets/images/tortellini.jpg";

function Section() {
  return (
    <>
      <Card title="Pepperoni Pizza" img={Pizza} />
      <Card title="Tortellini" img={Cake} />
      <Card title="Strawberry Cake" img={Tortellini} />
    </>
  );
}

export default Section;
