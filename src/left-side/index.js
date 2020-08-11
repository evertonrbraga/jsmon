import React from "react";

import Button from "../components/Button";
import ScreenItem from "./components/ScreenItem";
import { Container } from "./styles";

const data = ["JavaScript", "Node.js"];

const LeftSide = () => {
  const techs = data.map((item) => <ScreenItem name={item} />);
  return (
    <Container>
      <div className="screen">{techs}</div>
      <div className="del-and-put-container">
        <Button text="delete" />
        <Button text="update" />
      </div>
      <div className="box box01">
        <Button colorBtn="#353535" type="round" />
      </div>
      <div className="box box02">Hello Everton!</div>
      <div className="box box03">
        <div className="arrows up-down"></div>
        <div className="arrows left-right"></div>
      </div>
    </Container>
  );
};

export default LeftSide;
