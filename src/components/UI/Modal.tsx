import Backdrop from './Backdrop.tsx';
import * as React from 'react';

interface Props {
  show: boolean;
}

const Modal: React.FC<Props> = ({show}) => {
  return (
    <>
      <Backdrop show={show}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
            </div>
            Modal Content
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;