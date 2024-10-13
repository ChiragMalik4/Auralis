import HomePage from "./Pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import HeadphonesShop from "./Pages/HeadphonesShop";
import EarbudsShop from "./Pages/EarbudsShop";
import MusicplayersShop from "./Pages/MusicplayerShop";
import SpeakersShop from "./Pages/SpeakersShop";
import SoundbarsShop from "./Pages/SoundbarsShop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Log-in" element={<Login />} />
        <Route path="/headphones" element={<HeadphonesShop />} />
        <Route path="/earbuds" element={<EarbudsShop />} />
        <Route path="/music-players" element={<MusicplayersShop />} />
        <Route path="/speakers" element={<SpeakersShop />} />
        <Route path="/soundbars" element={<SoundbarsShop />} />
      </Routes>
    </Router>
  );
}

export default App;
