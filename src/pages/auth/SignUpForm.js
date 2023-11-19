import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import nangyuanIsland from '../../assets/nangyuan-island.jpg';


import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    
    <Row className={styles.Row}>
      {/* Welcome Message */}
      <Container className={`${appStyles.ContentWithoutBackground} p-4 text-center`}>
        <h2 className={styles.WelcomeMessage}>
          Explore the Unseen, Discover the Dream
        </h2>
      </Container>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

            {/* add your form here */}
            <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control className={styles.Input} type="text" placeholder="username" name="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control className={styles.Input} type="password" placeholder="password" name="password1" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label className="d-none">Confirm Password</Form.Label>
        <Form.Control className={styles.Input} type="password" placeholder="confirm password" name="password2" />
      </Form.Group>

      <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
        Sign Up
      </Button>
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
