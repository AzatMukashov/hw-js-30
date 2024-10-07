const Modal = () => {
  return (
    <>
      <div
        className="modal-backdrop show"
        style={{display: 'block'}}
      />
      <div className="modal show" style={{display: 'block'}}>
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