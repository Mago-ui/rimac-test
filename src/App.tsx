import { Route, Routes } from "react-router-dom";
import Login from "../src/view/Login";
import PlansCoverage from './view/plansCoverage'
import Header from "../src/components/header/header";
import "./App.scss";

function App() {

  return (
    <>
      <div>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/plans-coverage" element={<PlansCoverage/>} />
        </Routes>
      </div>

   
    </>
  );
}

export default App;
