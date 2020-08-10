import React from "react";

import Button from "../components/Button";
import { Container } from "./styles";

const LeftSide = () => {
  return (
    <Container>
      <div className="screen">
        <img src="https://source.unsplash.com/random/300x200" alt="" />
        <h1>Javascript</h1>
      </div>
      <div className="del-and-put-container">
        <Button text="delete" />
        <Button text="update" />
      </div>
      <div className="box01">1</div>
      <div className="box02">2</div>
      <div className="box03">3</div>
      {/* <Button text="reset" type="round" /> */}
    </Container>
  );
};

export default LeftSide;
