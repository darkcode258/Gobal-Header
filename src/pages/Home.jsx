import React from "react";
import Section1 from "../Component/Section1";
import Section2 from "../Component/Section2";

function Home() {
  return (
    <>
      {/* className="relative isolate px-6 pt-14 lg:px-8 h-full" */}

      <div className=" py-16  mx-auto bg-white">
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

export default Home;
