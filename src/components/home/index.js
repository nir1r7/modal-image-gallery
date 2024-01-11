import React from "react";
import ModalImage from "../modal";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";

function App() {

  return (
    <div className="App">
      <h1>Modal image gallery in React</h1>

      <ModalImage src={img1}/>
      <ModalImage src={img2}/>
      <ModalImage src={img3}/>

    </div>
  );
}

export default App;
