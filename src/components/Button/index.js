import React from "react";

import { Container } from "./styles";

const Button = ({ type, text }) => {
  return <Container type={type}>{text}</Container>;
};

export default Button;
