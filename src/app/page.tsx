import EcgWaveHeart from "@/components/ECGHeart";
import LoadingAnimation from "@/components/LoadingAnimation";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <EcgWaveHeart />
      <LoadingAnimation />
    </>
  );
};

export default Home;
