import React from "react";

import { Container } from "./styles";

const ScreenItem = ({ item }) => {
  const { image, name, description } = item;
  return (
    <Container>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </Container>
  );
};

export default ScreenItem;
