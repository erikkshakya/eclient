import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createArticles } from "../../actions/article-actions";
import { useHistory } from "react-router-dom";

const FormArticle = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const initialArticleForm = Object.freeze({
    title: "",
    description: "",
    image: "",
  });

  const [postData, setPostData] = useState(initialArticleForm);

  const handleChange = (e) => {
    if ([e.target.name] === "image") {
      setImage({
        image: e.target.files,
      });
      console.log(e.target.files);
    }
    if ([e.target.name] === "description") {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
      });
    }
    if ([e.target.name] === "title") {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
      });
    } else {
      setPostData({
        ...postData,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", postData.title);
    formData.append("description", postData.description);
    formData.append("image", postData.image);
    dispatch(createArticles(formData));
    history.push("/");
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            accept="image/"
            type="file"
            name="image"
            id="imageFile"
            label="Choose Image"
            onChange={handleChange}
          ></Form.File>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Button variant="danger" type="Submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
export default FormArticle;
