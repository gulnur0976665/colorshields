import React from "react";
import scss from "./Home.module.scss";
import HomePages from "./HomePages";
import Offers from "./Offers";
import About from "./About";
import Works from "./Works";
import Form from "../../ui/form/Form";

const Home = () => {
  return (
    <div className={scss.Home}>
      <HomePages />
      <Offers />
      <About />
      <Works />
      <Form />
    </div>
  );
};

export default Home;
