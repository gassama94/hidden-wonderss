import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import nangyuanIsland from '../../assets/nangyuan-island.jpg';


import { Form, Button, Image, Col, Row, Container, Alert,} from "react-bootstrap";
import axios from "axios";


const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Check if username is empty
    if (!username.trim()) {
      newErrors.username = ["Username is required"];
    }

    // Check if the password fields are empty
    if (!password1) {
      newErrors.password1 = ["Password is required"];
    }
    if (!password2) {
      newErrors.password2 = ["Confirm password is required"];
    }

    // Check if passwords match
    if (password1 && password2 && password1 !== password2) {
      newErrors.password2 = ["Passwords do not match"];
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form before submission
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return; // Stop the form submission if errors are found
    }

    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      console.log(err.response);
      setErrors(err.response?.data);
    }
  };


  return (
    
    <Row className={styles.Row}>
      
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

            {/* add your form here */}
    <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control 
        className={styles.Input} 
        type="text" placeholder="username" 
        name="username" value={username} 
        onChange={handleChange} />
       </Form.Group>
       {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control 
        className={styles.Input} 
        type="password" 
        placeholder="password" 
        name="password1" 
        value={password1} 
        onChange={handleChange} />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Confirm Password</Form.Label>
        <Form.Control className={styles.Input} type="password" placeholder="confirm password" name="password2" value={password2} onChange={handleChange} />
      </Form.Group>
      {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
        Sign Up
      </Button>
      {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}


    </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={nangyuanIsland}
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
