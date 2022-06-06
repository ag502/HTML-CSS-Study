import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
      {/* <div
        style={{
          backgroundColor: "hsl(195deg, 20%, 86%)",
          position: "fixed",
          isolation: "isolate",
          left: 0,
          right: 0,
          top: "60%",
          bottom: 0,
        }}
      ></div> */}
    </>
  );
}

export default App;
