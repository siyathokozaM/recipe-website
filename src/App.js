import "./index.css";
import Hero from "./components/Home";
import About from "./components/About";
import Content from "./components/Content";
import Contact from "./components/Contact";
import RecipeDetails from "./components/RecipeDetails";
import Recipes from "./components/Recipes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipes" element={<Content />}></Route>
        <Route path="recipes/:id" element={<RecipeDetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/details" element={<Recipes />}></Route>
      </Routes>
    </div>
  );
}
