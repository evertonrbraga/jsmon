import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 30px;
  background: #dc0a2d;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 3px solid black;
  border-radius: 0 20px 20px 0;

  .screen {
    grid-column: 1/3;
    grid-row: 1/2;
    height: 150px;
    border: 3px solid black;
    padding: 15px;
    background: #353535;
  }
  .screen2 {
    grid-column: 1/3;
    grid-row: 2/3;
    height: 171.18px;
    background: #2aaafd;

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      li {
        border: 3px solid black;
        height: calc(171.18px / 2);
        width: 20%;
      }
    }
  }

  .main-container {
    grid-column: 1/3;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .left-container {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      /* background: yellow; */

      .btn-container {
        display: flex;
      }

      .categories {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .right-container {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      /* background: yellowgreen; */

      .btn-container {
        display: flex;
      }
    }
  }
`;
