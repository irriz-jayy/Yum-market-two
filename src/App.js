import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>{" "}
    </div>
  );
}

export default App;
