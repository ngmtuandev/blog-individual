"use client";

import Framer1 from "../components/Framer1";
import Framer2 from "../components/Framer2";
import Framer3 from "../components/Framer3";
import Framer4 from "../components/Framer4";
import Framer5 from "../components/Framer5";
import FramerCircle from "../components/FramerCircle";
import FramerImgMe from "../components/FramerImgMe";
import FramerInfo from "../components/FramerInfo";
import FramerSquare from "../components/FramerSquare";
import FramerTitle from "../components/FramerTitle";

const HomePage = () => {
  return (
    <div className="pb-40 h-[100%] overflow-scroll lg:pb-[100px] bg-white flex flex-col gap-52 w-full overflow-x-hidden pt-36 ">
      <div className="">
        <FramerTitle></FramerTitle>
        <FramerCircle></FramerCircle>
        <FramerImgMe></FramerImgMe>
      </div>
      <div className="">
        <Framer1></Framer1>
      </div>
      <div className=" w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center">
        <FramerInfo></FramerInfo>
      </div>
      <div className="">
        <Framer3></Framer3>
      </div>
      <div className="">
        <Framer2></Framer2>
      </div>
      <div className="">
        <Framer4></Framer4>
      </div>
      <div className="">
        <Framer5></Framer5>
      </div>
    </div>
  );
};

export default HomePage;
