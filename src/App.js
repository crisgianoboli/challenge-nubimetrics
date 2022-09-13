import "./App.css";
import Logo from "./assets/Logo";
import foodImg from "./assets/food.jpg";

function App() {
  return (
    <div>
      <Logo />
      <img src={foodImg} alt="foodImg" />
    </div>
  );
}

export default App;
