import React from "react";

const ShuffleTeam = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-around">
          <button className="hidden md:block w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div className="relative">
            <div className="max-w-2xl mx-auto py-16 px-12 mb-6 lg:mb-12 bg-gray-50 rounded-lg text-center">
              <div className="absolute inset-0 -mt-10">
                <img
                  className="w-20 h-20 mx-auto rounded-full mb-6"
                  src="mockup-assets/images/gray-300-avatar.png"
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-bold font-heading">Danny Bailey</h3>
              <p className="mb-4 text-gray-500 text-lg">CEO &amp; Founder</p>
              <p className="text-gray-500 text-lg leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
          <button className="hidden md:block w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-gray-100">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:block w-full text-center">
          <button className="w-3 h-3 mr-2 rounded-full border border-gray-500 bg-gray-500"></button>
          <button className="w-3 h-3 mr-2 rounded-full border border-gray-500"></button>
          <button className="w-3 h-3 mr-2 rounded-full border border-gray-500"></button>
          <button className="w-3 h-3 rounded-full border border-gray-500"></button>
        </div>
        <div className="md:hidden w-full text-center">
          <button className="w-12 h-12 p-2 rounded-full bg-gray-50">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button className="w-12 h-12 p-2 rounded-full bg-gray-50">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShuffleTeam;