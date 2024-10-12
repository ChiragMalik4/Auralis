import { useState } from "react";
import Welcome from "../components/Welcome";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Test from "../components/Test";
import ShoppingCartSidebar from "../components/CartSidebar";

const HomePage = () => {
  const [ShowWelcome, setShowWelcome] = useState(true);

  const handleClick = () => {
    setShowWelcome(!ShowWelcome);
  };

  return (
    <div className="overflow-hidden ">
      {ShowWelcome ? (
        <Welcome onClick={handleClick} />
      ) : (
        <>
          <Hero />

          <Test />
        </>
      )}
    </div>
  );
};

export default HomePage;
