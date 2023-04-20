import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                atque veniam aliquid ducimus, sapiente porro minus quos sint quo
                pariatur asperiores fugit, illum facere repudiandae ut
                repellendus! Totam iure ducimus neque blanditiis ratione quas
                quae quidem molestias voluptates velit quam, voluptas culpa
                doloribus. Amet nesciunt nemo magni ducimus quo assumenda.
              </p>
              <button onClick={toggleModal} className="close-modal">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
