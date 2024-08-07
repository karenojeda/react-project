import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles/ListModal.css";

const ListModal = ({ show, handleClose, listType }) => {
  const getTitle = () => {
    switch (listType) {
      case "watchlist":
        return "Watchlist";
      case "favorites":
        return "Favorites";
      case "watched":
        return "Watched";
      default:
        return "";
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {}
        {}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ListModal;
