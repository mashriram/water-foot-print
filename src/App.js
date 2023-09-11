import "./App.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Header from "./components/Header/Header";

const data = require("./data/water_content.json");

function App() {
    return (
        <div className="App">
            <Header />
            <FoodItems foodItems={data} />
        </div>
    );
}

export default App;
