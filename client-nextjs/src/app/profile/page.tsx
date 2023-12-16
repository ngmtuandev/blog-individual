"use client";

import Framer1 from "../components/Framer1";
import Framer2 from "../components/Framer2";
import Framer3 from "../components/Framer3";
import Framer4 from "../components/Framer4";
import FramerCircle from "../components/FramerCircle";
import FramerInfo from "../components/FramerInfo";
import FramerSquare from "../components/FramerSquare";
import FramerTitle from "../components/FramerTitle";
import Test from "../components/Test";

const HomePage = () => {
  return (
    <div className="h-full lg:pb-[100px] bg-white w-full overflow-x-hidden pt-36 ">
      <FramerTitle></FramerTitle>
      <FramerSquare></FramerSquare>
      <FramerCircle></FramerCircle>
      <div className="mt-[200px]">
        <Framer1></Framer1>
      </div>
      <div className="mt-[300px] w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
        <FramerInfo></FramerInfo>
      </div>
      <div className="mt-[300px]">
        <Framer3></Framer3>
      </div>
      <div className="mt-[300px]">
        <Framer2></Framer2>
      </div>
      <div className="mt-[300px]">
        <Framer4></Framer4>
      </div>
    </div>
  );
};

export default HomePage;
