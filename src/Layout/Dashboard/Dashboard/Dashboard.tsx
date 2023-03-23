import React from "react";
import Aside from "../Components/Aside";
import Main from "../Main/Main";

const Dashboard = () => {
  return (
    <div>
      <div className="background bg-blue-500 absolute w-full min-h-[20rem]"></div>
      <div className="bg-white flex">
        <aside className="fixed max-w-[16rem] w-[16rem] ml-6 rounded-xl my-4 bg-white shadow-lg">
          <Aside />
        </aside>
        <main className="xl:ml-[17rem] mt-4 relative basis-full">
          <Main />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
