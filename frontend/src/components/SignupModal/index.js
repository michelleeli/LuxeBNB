import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupFormPage from './SignupForm';

function SignupModal() {
  const [showModal, setShowModal] = useState(false);

  const handleSignup =(e) => {
    e.stopPropagation()
    setShowModal(true)
    console.log(showModal)
  }

  return (
    <>
      <button onClick={handleSignup}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignupModal;