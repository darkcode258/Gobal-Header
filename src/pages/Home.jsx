import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/footer";
import Section1 from "../Component/Section1";
import Theam from "../Component/Theam";
import Section2 from "../Component/Section2";

function Home() {
  return (
    <>
      {/* className="relative isolate px-6 pt-14 lg:px-8 h-full" */}

      <div>
        <Header />
        <Section1 />
        <Section2 />

        <Footer />
        <Theam />
      </div>
    </>
  );
}

export default Home;
