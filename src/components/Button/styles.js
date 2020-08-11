import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid black;
  background: ${({ properties }) => properties.colorBtn};

  width: ${({ properties }) =>
    properties.type === "round" ? "50px" : "150px"};

  height: ${({ properties }) =>
    properties.type === "round" ? "50px" : "50px"};

  border-radius: ${({ properties }) =>
    properties.type === "round" ? "100px" : "5px"};
`;
