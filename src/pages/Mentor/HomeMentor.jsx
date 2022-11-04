import React from "react";
import Layout from "../../components/Layout";
import { CardTask } from "../../components/Cards";
import hero from "../../assets/hero.png";
import toys3 from "../../assets/toys-3.png";
import { Link } from "react-router-dom";
const HomeMentor = () => {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="md:space-y-2">
          <h1 className="text-putih text-lg md:text-3xl font-medium">
            Hello <span>Yoga !</span>
          </h1>
          <p className="text-abu font-light text-[8px] md:text-sm">
            Welcome back, you are doing great.
          </p>
        </div>
        <div className="flex items-center ">
          <Link to="/profilementor">
            <img
              id="gbr-hero"
              src={toys3}
              alt="avatar"
              className="h-[1.5rem] w-[1.5rem]  md:h-[3rem] md:w-[3rem] rounded-full "
            />
          </Link>

          <div className="pl-2 md:pl-4 space-y-0">
            <Link to="/profilementor">
              <h1 className="text-putih text-[10px] md:text-base">
                Yoga S Devanada
              </h1>
            </Link>
            <p className="text-abu font-light text-[8px] md:text-xs">Mentor</p>
          </div>
        </div>
      </div>
      <div className="w-[18rem] h-[8rem] md:w-[32rem] md:h-[12rem] lg:w-[52rem] lg:h-[15rem] gradient-home rounded-2xl md:rounded-[30px] mt-[4rem] ">
        <div className=" flex">
          <div className=" pl-5 pt-5 md:pl-9 md:pt-9">
            <h1 className="text-putih text-sm md:text-lg lg:text-2xl font-medium">
              When nothing goes right, go left
            </h1>
            <p className="text-abu text-[6px] md:text-xs font-light mt-2  lg:mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative bottom-9">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
      <div className="mt-[3rem] md:mt-[5rem]">
        <h1 className="text-putih text-lg font-medium mb-6">
          Your Created Task
        </h1>
        <CardTask />
      </div>
    </Layout>
  );
};

export default HomeMentor;
