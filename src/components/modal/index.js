import React, { useState} from "react";
// import useModal from "./usage";

/*
ModalType interface for TypeScript

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}
*/

// For TypeScript, replace header with: export default function Modal(props: ModalType)
export default function ModalImage(props) {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <img className="modal-display-image" src={props.src} onClick={toggle} alt=""/>
      {isOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {/* Change the next line to `props.children` if you would like to put something other than an img in the modal*/}
            <img className="modal-image" src={props.src} alt=""/>
          </div>
        </div>
      )}
    </>
  );
}

function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}
