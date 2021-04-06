import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createArticles } from "../../actions/article-actions";
import axios from 'axios'

const ArticleForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const uploadFileHandler = async (e) => {
    // const file = e.target.files[0];
    // const bodyFormData = new FormData();
    // bodyFormData.append('image', file);
    // try {
    //   const { data } = await axios.post('/api/uploads', bodyFormData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   setImage(data);
    // } catch (error) {
    //   console.log(error.message);
    // }
    console.log("hello")
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const article = {
      title: title,
      description: description,
      image: image
    }
    console.log(article)
    dispatch(createArticles(article));
    // handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="image">Image</Form.Label>
              <Form.Control
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="imageFile">Image File</Form.Label>
              <Form.File
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></Form.File>
            </Form.Group>           
            {/* <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> */}
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="danger" type="Submit">
                Save
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>
    </>
  );
};

export default ArticleForm;
