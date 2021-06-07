import React, { useEffect, useState } from "react";
import HomeTopScene from "../components/HomeTopScene";
import HomeQualities from "../components/HomeQualities";
import HomeTechnologies from "../components/HomeTechnologies";

const Home = () => {
  const [isQualityItemOutsideViewport, setIsQualityItemOutsideViewport] =
    useState(true);
  const [isTechnologyItemOutsideViewport, setIsTechnologyItemOutsideViewport] =
    useState(true);

  const handleScroll = () => {
    const position = document.getElementById("home-main-container")?.scrollTop;
    console.log("position=" + position);
    if (position && position > 200) {
      setIsQualityItemOutsideViewport(false);
    }

    if (position && position > 1200) {
      setIsTechnologyItemOutsideViewport(false);
    }
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
        <HomeTechnologies
          isTechnologyItemOutsideViewport={isTechnologyItemOutsideViewport}
        />
      </div>
    </div>
  );
};

export default Home;
