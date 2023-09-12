import { useEffect, useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Header from "./components/Header/Header";

// const data = require("./data/water_content.json");

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000")
            .then((response) => response.json())
            .then((respData) => setData(respData));
    }, []);
    return (
        <div className="App">
            <Header />
            <div className="parentGrid">
                <FoodItems foodItems={data.foodItems} />
            </div>
        </div>
    );
}

export default App;
