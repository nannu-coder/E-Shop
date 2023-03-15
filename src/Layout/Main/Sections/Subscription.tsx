import React from "react";
import bg from "../../../Images/discount-banner-1.jpg";

const Subscription = () => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundRepeat: "no-repeat" }}
      className="relative isolate overflow-hidden  py-8 mt-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none">
          <div className="max-w-xl lg:max-w-lg mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-black">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Subscription;
