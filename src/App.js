import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        <h3>Roya Bot</h3>
        <h4>Cargar Imagen</h4>
      </div>
      <UploadFiles />
    </div>
  );
}

export default App;
