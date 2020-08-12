import React from "react";

import GlobalStyle from "./styles/global";
import { Container } from "./styles";
import LeftSide from "./left-side";
import RightSide from "./right-side";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <LeftSide />
      <RightSide />
    </Container>
  );
}

export default App;
