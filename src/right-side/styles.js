import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 50px;
  background: #dc0a2d;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 3px solid black;

  .screen {
    grid-column: 1/3;
    grid-row: 1/2;
    height: 150px;
    border: 3px solid black;
    padding: 15px;
    background: #353535;
  }

  .del-and-put-container {
    grid-column: 1/3;
    grid-row: 2/3;
    display: flex;
    /* flex-direction: column; */

    .btn-container {
      display: flex;
    }
  }

  footer {
    grid-column: 1/3;
    display: flex;
    flex-direction: column;

    .round-btn {
      align-self: flex-end;
    }

    .box-container {
      display: flex;

      .box {
        border: 3px solid black;
      }

      .box01 {
        width: 50%;
        /* grid-column: 1/2; */
        /* grid-row: 3/4; */
      }

      .box02 {
        width: 50%;
        /* grid-column: 2/3; */
        /* grid-row: 3/4; */
        background: #51ae5f;
      }
    }
  }
`;
