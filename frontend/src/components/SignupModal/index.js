import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { clearErrors } from '../../store/errors';
import SignupFormPage from './SignupForm';

function SignupModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const handleSignup =(e) => {
    e.stopPropagation()
    dispatch(clearErrors())
    setShowModal(true)
    console.log(showModal)
  }

  return (
    <>
      <button id="signupButton" onClick={handleSignup}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignupModal;