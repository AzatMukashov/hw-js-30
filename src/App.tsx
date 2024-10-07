import Modal from './components/UI/Modal.tsx';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Modal show={showModal}/>
      <button className="btn btn-primary" onClick={() => setShowModal(!showModal)}>Order</button>
    </>
  );
};
export default App
