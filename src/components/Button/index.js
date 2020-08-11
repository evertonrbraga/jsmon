import React from "react";

import { Container } from "./styles";

const Button = ({ type, text, colorBtn = "#fff" }) => {
  return (
    <Container
      properties={{
        type,
        colorBtn,
      }}
    >
      {text}
    </Container>
  );
};

export default Button;
