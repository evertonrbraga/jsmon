import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 30px;
  background: #dc0a2d;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 3px solid black;
  border-radius: 20px 0 0 20px;

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
    align-items: flex-end;
    justify-content: center;
  }

  .boxes {
    display: flex;
    align-items: flex-end;
    grid-column: 1/4;

    justify-content: space-between;
    width: 100%;

    .box {
      width: 120px;
      height: 120px;
    }

    .box01 {
      /* grid-column: 1/2; */
      /* grid-row: 3/4; */
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    .box02 {
      display: flex;
      align-items: center;
    }

    .box03 {
      /* grid-column: 3/4; */
      /* grid-row: 3/4; */
      /* width: 100px;
      height: 100px; */
      /* display: flex;
      align-items: center;
      justify-content: center;
      position: relative; */
      /* background: orange; */
      display: flex;
      align-items: center;
      justify-content: center;

      .arrows {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .up-down {
          background: #353535;
          width: 30px;
          height: 100%;
          position: absolute;
        }

        .left-right {
          background: #353535;
          width: 100%;
          height: 30px;
          position: absolute;
        }
      }
    }
  }
`;
