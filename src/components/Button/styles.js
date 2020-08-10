import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid black;
  width: ${({ type }) => (type === "round" ? "50px" : "150px")};
  height: ${({ type }) => (type === "round" ? "50px" : "50px")};
  border-radius: ${({ type }) => (type === "round" ? "100px" : "5px")};
`;
