import React from "react";

import { Container } from "./styles";

const Button = ({
  type,
  text,
  colorBtn = "#fff",
  colorText = "#000",
  fontWeight = "400",
}) => {
  return (
    <Container
      properties={{
        type,
        colorBtn,
        colorText,
        fontWeight,
      }}
    >
      {text}
    </Container>
  );
};

export default Button;
