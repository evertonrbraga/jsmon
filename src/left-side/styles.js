import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 50px;
  background: blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70vh;
  border: 3px solid black;

  .screen {
    grid-column: 1/4;
    grid-row: 1/2;
    height: 300px;
    border: 3px solid black;
  }

  .del-and-put-container {
    grid-column: 1/4;
    grid-row: 2/3;
  }

  .box01 {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .box02 {
    grid-column: 2/3;
    grid-row: 3/4;
  }

  .box03 {
    grid-column: 3/4;
    grid-row: 3/4;
  }
`;
