import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 50px;
  background: #dc0a2d;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid black;

  .screen {
    grid-column: 1/4;
    grid-row: 1/2;
    height: 300px;
    border: 3px solid black;
    padding: 15px;
    background: #353535;
  }

  .del-and-put-container {
    grid-column: 1/4;
    grid-row: 2/3;
    display: flex;
  }

  .box {
    border: 3px solid black;
  }

  .box01 {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .box02 {
    grid-column: 2/3;
    grid-row: 3/4;
    background: #51ae5f;
  }

  .box03 {
    grid-column: 3/4;
    grid-row: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .arrows {
      background: #353535;
    }

    .up-down {
      width: 50px;
      height: 100%;
      position: absolute;
    }

    .left-right {
      width: 100%;
      height: 50px;
      position: absolute;
    }
  }
`;
