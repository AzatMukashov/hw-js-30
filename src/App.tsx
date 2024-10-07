import Modal from './components/UI/Modal.tsx';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Modal show={showModal} title='Order' onClose={closeModalWindow}>
      modal text content
      </Modal>
      <button className="btn btn-primary" onClick={() => setShowModal(!showModal)}>Order</button>
    </>
  );
};
export default App
