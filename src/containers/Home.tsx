import React from 'react';
import HomeTopScene from "../components/HomeTopScene";
import HomeQualities from "../components/HomeQualities";

const Home = () => {
  return (
    <div className={"home-main-container"}>
      <div className={"home-wrapper"}>
        <HomeTopScene />
        <HomeQualities />
      </div>
    </div>
  );
};

export default Home;
