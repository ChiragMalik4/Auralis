import HomePage from "./Pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import HeadphonesShop from "./Pages/HeadphonesShop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Log-in" element={<Login />} />
        <Route path="/headphones" element={<HeadphonesShop />} />
      </Routes>
    </Router>
  );
}

export default App;
