import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

export default function AddToTheList(props) {
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "movie title",
    description: "it's a new serie",
    posterURL:
      "https://donnalba.files.wordpress.com/2016/07/cute-fingers-happy-love-smile-favim_com-129263.jpg?w=640",
    rating: 0,
  });
  const addNewMovie = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    setShow(false);
    props.addMovie(newMovie);
  };
  const handleClose = () => setShow(false);

  return (
    <div className="Add">
      <Button variant="primary" onClick={handleShow}>
        Add A New Movie
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="newMovie">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Movie title"
                name="title"
                onChange={addNewMovie}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Movie description"
                name="description"
                onChange={addNewMovie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Movie posterURL "
                name="posterURL"
                onChange={addNewMovie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Movie rating"
                name="rating"
                onChange={addNewMovie}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
