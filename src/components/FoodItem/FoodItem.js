import styles from "./FoodItem.module.css";

function FoodItem(props) {
    const item = props.item;
    return (
        <div>
            <img src={item.img} />
            <p>{item.productdesc}</p>
            <p>{item.portionsize}</p>
            <p>{item.wfpgal}</p>
            <p>{item.wfplts}</p>
        </div>
    );
}

export default FoodItem;
