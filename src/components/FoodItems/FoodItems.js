import FoodItem from "../FoodItem/FoodItem";
import styles from "./FoodItems.module.css";

function FoodItems(props) {
    return (
        <>
            {props.foodItems &&
                props.foodItems.length > 0 &&
                props.foodItems.map((foodItem, idx) => {
                    return (
                        <div className={styles.foodItem}>
                            <FoodItem key={idx} item={foodItem} />
                        </div>
                    );
                })}
        </>
    );
}

export default FoodItems;
