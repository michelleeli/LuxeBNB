import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { clearErrors } from '../../store/errors';
import SignupFormPage from './SignupForm';

function SignupModal({closeModal}) {

  return (
      <Modal onClose={closeModal}>
        <SignupFormPage closeModal={closeModal}/>
      </Modal>
  );
}

export default SignupModal;