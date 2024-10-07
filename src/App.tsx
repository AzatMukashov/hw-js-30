import Modal from "./components/UI/Modal.tsx";
import { useState } from "react";
import Alert from "./components/UI/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(true);
  const [showDanger, setShowDanger] = useState<boolean>(true);

  const closeModalWindow = () => setShowModal(!showModal);

  const closeWarning = () => setShowWarning(!showWarning);
  const closeDanger = () => setShowDanger(!showDanger);
  return (
    <>
      <Modal show={showModal} title="Order" onClose={closeModalWindow}>
        modal text content
      </Modal>
      <button
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Order
      </button>
      {showWarning && (
        <Alert type="warning" onDismiss={closeWarning}>
          This is a warning type alert
        </Alert>
      )}
      <Alert type="success">This is a success message</Alert>
      {showDanger && (
        <Alert type="danger" onDismiss={closeDanger}>
          This is a danger type alert
        </Alert>
      )}
      <Alert type="primary">This is a primary message</Alert>
    </>
  );
};
export default App;
