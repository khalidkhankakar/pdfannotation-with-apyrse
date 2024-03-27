import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPDF from "./components/EditPDF/EditPDF";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit" element={<EditPDF />} />
        </Routes>
    </Router>
  );
};

export default App;
