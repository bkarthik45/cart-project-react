import "./App.css";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsDetails from "./components/CardsDetails.js";
import Cards from "./components/Cards.js"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" element={<Cards />}/>
        <Route path="/cart/:id" element={< CardsDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
