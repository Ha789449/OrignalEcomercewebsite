// components/ProductModal.js
import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const ProductModal = ({ product }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <button onClick={toggle}>View Details</button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{product.title}</ModalHeader>
        <ModalBody>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProductModal;
