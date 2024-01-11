import React from "react";

/*
ModalType interface for TypeScript

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

*/

// For TypeScript, replace header with: export default function Modal(props: ModalType)
export default function Modal(props) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
