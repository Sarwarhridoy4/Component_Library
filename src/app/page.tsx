import EcgWaveHeart from "@/components/ECGHeart";
import LoadingAnimation from "@/components/LoadingAnimation";
import React from "react";

const Home = () => {
  return (
    <>
      <EcgWaveHeart />
      <LoadingAnimation/>
    </>
  );
};

export default Home;
