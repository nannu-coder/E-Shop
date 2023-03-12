import React from "react";
import { Link } from "react-router-dom";
import background1 from "../../../Images/campaign-cover-countdown.jpg";
import background2 from "../../../Images/download-app-cover.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import android from "../../../Images/play-store.png";
import appleStore from "../../../Images/apple-store.png";
import appScreen from "../../../Images/app-screen.png";

const TimerApp = () => {
  return (
    <section>
      <div className="timer-app mt-10">
        <div className="container-x mx-auto">
          <div className="grid grid-cols-6 gap-8">
            <div className="timer-part col-span-3 lg:h-[460px] w-full">
              <Link to="/">
                <div
                  className="timer-container h-full"
                  style={{ background: `url(${background1})` }}
                >
                  <div className="counter w-full flex justify-evenly text-center pt-16">
                    <div className="count">
                      <p className="bg-white text-red-500 w-24 h-24 rounded-full flex justify-center items-center text-3xl font-bold">
                        0
                      </p>
                      <h5 className="text-2xl font-bold mt-2">Days</h5>
                    </div>
                    <div className="count">
                      <p className="bg-white text-orange-500 w-24 h-24 rounded-full flex justify-center items-center text-3xl font-bold">
                        0
                      </p>
                      <h5 className="text-2xl font-bold mt-2">Hours</h5>
                    </div>
                    <div className="count">
                      <p className="bg-white text-amber-500 w-24 h-24 rounded-full flex justify-center items-center text-3xl font-bold">
                        0
                      </p>
                      <h5 className="text-2xl font-bold mt-2">Minutes</h5>
                    </div>
                    <div className="count">
                      <p className="bg-white text-violet-500 w-24 h-24 rounded-full flex justify-center items-center text-3xl font-bold">
                        0
                      </p>
                      <h5 className="text-2xl font-bold mt-2">Seconds</h5>
                    </div>
                  </div>
                  <h2 className="text-5xl font-bold mt-8 ml-16">
                    WOO! Flash Sale
                  </h2>
                  <Link
                    className="ml-16 block mt-5 text-base font-bold "
                    to="/"
                  >
                    <span className="flex items-center decoration-gray-900 decoration-solid underline">
                      Shop Now
                      <ChevronRightIcon className="h-5 w-5" />
                    </span>
                  </Link>
                </div>
              </Link>
            </div>
            <div className="app-part col-span-3">
              <div
                className="app-container h-full p-10"
                style={{ background: `url(${background2})` }}
              >
                <h2>MOBILE APP VERSION</h2>
                <h2 className="text-4xl font-bold leading-10">
                  Get Our
                  <span className="text-red-500 underline">Mobile App</span>
                  <br /> It’s Make easy for you life!
                </h2>

                <div className="app-image flex mt-5">
                  <Link to="/">
                    <img src={android} alt="playStore" />
                  </Link>
                  <Link to="/">
                    <img className="ml-4" src={appleStore} alt="appleStore" />
                  </Link>
                </div>

                <div className="big-img mt-9">
                  <img src={appScreen} alt="AppScreen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerApp;
