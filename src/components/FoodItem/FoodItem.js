import styles from "./FoodItem.module.css";

function FoodItem(props) {
    const item = props.item;
    return (
        <div className={styles.foodItem}>
            <img className={styles.foodImage} src={item.img} />
            <div className={styles.details}>
                <p className={styles.productdesc}>{item.productdesc}</p>
                <p className={styles.portionsize}>{item.portionsize}</p>
                <p className={styles.wfpgal}>{item.wfpgal} gallons</p>
                <p className={styles.wfplts}>{item.wfplts} litres</p>
                <p className={styles.blue}>
                    blue water footprint: {item.blue}%
                </p>
                <p className={styles.green}>
                    green water footprint: {item.green}%
                </p>
                <p className={styles.grey}>
                    grey water footprint: {item.grey}%
                </p>
            </div>
        </div>
    );
}

export default FoodItem;
