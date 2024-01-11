import React from "react";
import Modal from "../modal";
import useModal from "../modal/usage";

function App() {
  const { isOpen, toggle } = useModal();

  return (
    <div className="App">
      <h1>Modal images in ReactJS</h1>
      <p>
        Click on the following images to see the modal:
      </p>
      <img src="img1.jpg" alt=""/>

      <button  onClick={toggle}>Click me!</button>

      <img src="./img1.jpg" onClick={toggle} alt=""/>
      <Modal isOpen={isOpen} toggle={toggle}>
          <div>
            <img className="modal-image" src="./img1.jpg" alt=""/>
          </div>
      </Modal>
          
      {
        console.log(isOpen)
      }

    </div>
  );
}

export default App;
