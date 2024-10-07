import Backdrop from "./Backdrop.tsx";
import * as React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title?: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({
  show,
  title = "Some kinda modal title",
  children,
  onClose,
}) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <button onClick={onClose} className="btn-close"></button>
            </div>
            <div className="p-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
