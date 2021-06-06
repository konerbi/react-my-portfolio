import React, { useEffect, useState } from "react";
import HomeTopScene from "../components/HomeTopScene";
import HomeQualities from "../components/HomeQualities";

const Home = () => {
  const [isQualityItemOutsideViewport, setIsQualityItemOutsideViewport] =
    useState(true);

  const handleScroll = () => {
    const position = document.getElementById("home-main-container")?.scrollTop;
    console.log("position=" + position);
    if (position && position > 200) {
      setIsQualityItemOutsideViewport(false);
    }

    // if (position > 1200) {
    //   setIsWhyUsOutsideViewport(false);
    // }
    // if (position > 3000) {
    //   setIsJobOutsideViewport(false);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"home-main-container"} id={"home-main-container"}>
      <div className={"home-wrapper"}>
        <HomeTopScene />
        <HomeQualities
          isQualityItemOutsideViewport={isQualityItemOutsideViewport}
        />
      </div>
    </div>
  );
};

export default Home;
