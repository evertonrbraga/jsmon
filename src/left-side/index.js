import React from "react";

import { data } from "../data";
import Button from "../components/Button";
import ScreenItem from "./components/ScreenItem";
import { Container } from "./styles";

// const data = ["JavaScript", "Node.js"];

const LeftSide = () => {
  const techs = data.map((item) => <ScreenItem key={item.id} item={item} />);
  return (
    <Container>
      <div className="screen">{techs}</div>
      <div className="del-and-put-container">
        <Button colorBtn="#f98498" text="delete" />
        <Button colorBtn="#248fde" text="update" />
      </div>
      <div className="boxes">
        <div className="box box01">
          <Button colorBtn="#353535" type="round" />
        </div>
        <div className="box box02">
          <Button type="fit" colorBtn="#51ae5f" text="Hello Everton" />
        </div>
        <div className="box box03">
          <div className="arrows">
            <div className="up-down"></div>
            <div className="left-right"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LeftSide;
