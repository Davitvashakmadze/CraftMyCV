import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from "./components/Pages/Create";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
