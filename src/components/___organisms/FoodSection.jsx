import "./FoodSection.css";
import Card from "../___molecules/Cards";
import Pizza from "../../assets/images/pizza.jpg";
import Cake from "../../assets/images/cake.jpg";
import Tortellini from "../../assets/images/tortellini.jpg";

function Section() {
  return (
    <>
      <Card
        title="Pepperoni Pizza"
        img={Pizza}
        ingredients={
          "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
        }
        first="265 Cal"
        second="P/F/C: 12/10/31"
        third="53.8 °C"
        newPrice="$23.90"
        oldPrice="$29.90"
      />
      <Card
        title="Tortellini"
        img={Tortellini}
        ingredients={
          "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        }
        first="270 Cal"
        second="P/F/C: 18/4/41"
        third="42.4 °C"
        newPrice="$17.90"
        oldPrice="$22.90"
      />
      <Card
        title="Strawberry Cake"
        img={Cake}
        ingredients={
          "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        }
        first="346 Cal"
        second="42.4 °C"
        third="13.9 °C"
        newPrice="$13.90"
        oldPrice="$18.90"
      />
    </>
  );
}

export default Section;
