import React from "react";

import Button from "../components/Button";
import { Container } from "./styles";

const RightSide = () => {
  return (
    <Container>
      <div className="screen">tech</div>
      <div className="screen2">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="main-container">
        <div className="left-container">
          <div>
            <p>dark mode</p>
            <div className="btn-container">
              <Button text="on" />
              <Button text="off" />
            </div>
          </div>
          <div className="categories">
            <Button
              colorBtn="#353535"
              colorText="#fff"
              fontWeight="700"
              type="fit"
              text="categories"
            />
          </div>
        </div>

        <div className="right-container">
          <div>
            <p>edit name</p>
            <div className="btn-container">
              <Button
                colorBtn="#353535"
                colorText="#fff"
                fontWeight="700"
                text="on"
              />
              <Button
                colorBtn="#353535"
                colorText="#fff"
                fontWeight="700"
                text="off"
              />
            </div>
          </div>
          <Button className="round-btn" colorBtn="#ffce21" type="round" />
          <Button
            colorBtn="#353535"
            colorText="#fff"
            fontWeight="700"
            type="fit"
            text="total"
          />
        </div>
      </div>
    </Container>
  );
};

export default RightSide;
