import { useState } from "react";
import Welcome from "../components/Welcome";
import Hero from "../components/Hero";
import ScrollSection from "../components/ScrollSections";

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

          <ScrollSection />
        </>
      )}
    </div>
  );
};

export default HomePage;
