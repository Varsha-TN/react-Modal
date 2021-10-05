import React, { useState } from 'react';
import './style.css';
import Modal from './Modal';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}
