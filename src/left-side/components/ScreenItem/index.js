import React from "react";

import { Container } from "./styles";

const ScreenItem = ({ name }) => {
  return (
    <Container>
      <img src="https://source.unsplash.com/random/80x80" alt="" />
      <h1>{name}</h1>
    </Container>
  );
};

export default ScreenItem;
