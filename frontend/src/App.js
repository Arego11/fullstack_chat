import './styles/App.css';

import {useCallback, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Menu from "./components/Menu";
import Modal from "./components/Modal";
import ModalLogin from "./components/ModalLogin";
import Slideshow from "./components/Slideshow";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const openModal = () => { setIsModalOpen(true); };

  const closeModal = useCallback(() => { setIsModalOpen(false); }, []);

  const openModalLogin = () => { setIsModalLoginOpen(true); };

  const closeModalLogin =
      useCallback(() => { setIsModalLoginOpen(false); }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <button className="create-account-button" onClick={openModal}>Create Free Account</button>
          <button className="login-button" onClick={openModalLogin}>Login</button>
        </header>
        <Menu />
        <div className="main-content">
          <Slideshow />
          <Modal isOpen={isModalOpen} onClose={
    closeModal} />
          <ModalLogin isOpen={isModalLoginOpen} onClose={closeModalLogin} />
          <Routes>
            <Route path="/signup" element={
    <Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <footer className="App-footer"></footer>
      </div>
    </Router>
  );
}

export default App;