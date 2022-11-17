import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import ChooseTemplate from "./components/Pages/ChooseTemplate";
import ImportResume from "./ImportResume/ImportResume";
import CreateResume from "./components/Create/CreateResume";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chooseTemplate" element={<ChooseTemplate />} />
          <Route path="/importResume" element={<ImportResume />} />
          <Route path="/create" element={<CreateResume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
