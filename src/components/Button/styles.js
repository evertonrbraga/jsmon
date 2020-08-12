import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  text-transform: uppercase;

  color: ${({ properties }) => properties.colorText};

  background: ${({ properties }) => properties.colorBtn};

  font-weight: ${({ properties }) => properties.fontWeight};

  width: ${({ properties }) =>
    properties.type === "round"
      ? "40px"
      : properties.type === "fit"
      ? "100%"
      : "80px"};

  height: ${({ properties }) =>
    properties.type === "round" ? "40px" : "35px"};

  border-radius: ${({ properties }) =>
    properties.type === "round" ? "40px" : "5px"};
`;
