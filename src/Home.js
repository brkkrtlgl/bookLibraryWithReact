import React from "react";
import Header from "./components/header";
import ListBooks from "./components/ListBooks";

const Home = (props) => {
  return (
    <div>
      <Header />
      <ListBooks />
    </div>
  );
};

export default Home;
