import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
