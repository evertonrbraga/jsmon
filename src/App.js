import React from "react";

import GlobalStyle from "./styles/global";
import { Container } from "./styles";
import LeftSide from "./left-side";
import RightSide from "./right-side";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <GlobalStyle />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
