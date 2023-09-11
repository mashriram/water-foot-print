import FoodItem from "../FoodItem/FoodItem";
import styles from "./FoodItems.module.css";

function FoodItems(props) {
    return (
        <div>
            {props.foodItems.map((foodItem, idx) => {
                return <FoodItem key={idx} item={foodItem} />;
            })}
        </div>
    );
}

export default FoodItems;
