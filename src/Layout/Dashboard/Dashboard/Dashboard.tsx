import React from "react";
import Aside from "../Components/Aside";
import Main from "../Main/Main";

const Dashboard = () => {
  return (
    <div className="bg-white">
      <aside className="fixed max-w-[16rem] w-[16rem] ml-6 rounded-2xl my-4 bg-red-500">
        <Aside />
      </aside>
      <main className="container mx-auto">
        <Main />
      </main>
    </div>
  );
};

export default Dashboard;
