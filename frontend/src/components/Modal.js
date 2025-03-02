import '../styles/Modal.css';

import React, {useEffect, useState} from 'react';

import {signup} from '../api/services/authService';

import ModalLogin from "./ModalLogin";

const Modal = ({isOpen, onClose}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const openModalLogin = () => {
    setIsModalLoginOpen(true);
    onClose(); // Close the sign-up modal
  };

  const closeModalLogin = () => {
    setIsModalLoginOpen(false);
  };

  useEffect(() => {
    if (isOpen) {setIsModalLoginOpen(false); // Reset the login modal state when the sign-up modal is opened
    }
  }, [isOpen]);

  useEffect(() => {
    if (isModalLoginOpen) {
      onClose(); // Close the sign-up modal when the login modal is opened
    }
  }, [isModalLoginOpen, onClose]);

  if (!isOpen && !isModalLoginOpen) return null;

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = await signup(username, email, password);
    console.log(data); // Check response
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
              <input type="email" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              <div className="buttons">
                <button type="submit">Create Account</button>
              </div>
              <div className="question">Already have an account?</div>
              <div className="signIn">
                <span className="signIn-text" onClick={openModalLogin}>Sign In</span>
              </div>
            </form>
          </div>
        </div>
      )}
      {isModalLoginOpen && <ModalLogin isOpen={isModalLoginOpen} onClose={closeModalLogin} />}
    </>
  );
};

export default Modal;