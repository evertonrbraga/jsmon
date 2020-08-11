import React from "react";

import Button from "../components/Button";
import { Container } from "./styles";

const RightSide = () => {
  return (
    <Container>
      <div className="screen">tech</div>
      <div className="del-and-put-container">
        <div className="container">
          <p>dark mode</p>
          <div className="btn-container">
            <Button text="on" />
            <Button text="off" />
          </div>
        </div>
        <div className="container">
          <p>edit name</p>
          <div className="btn-container">
            <Button text="on" />
            <Button text="off" />
          </div>
        </div>
      </div>
      <footer>
        <Button className="round-btn" colorBtn="#353535" type="round" />
        <div className="box-container">
          <div className="box box01">
            <div className="arrows up-down"></div>
          </div>
          <div className="box box02">Hello Everton!</div>
        </div>
      </footer>
    </Container>
  );
};

export default RightSide;
