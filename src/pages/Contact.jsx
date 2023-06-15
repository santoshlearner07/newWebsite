import { motion } from "framer-motion";
import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
function Contact() {
  const handleSubmit = () => {};

  return (
    <motion.div
      className="text-center"
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
      }}
      exit={{ scaleY: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <h2 className="text-success">Contact</h2>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3" controlId="validationCustom01">
              <FormLabel>Name</FormLabel>
              <FormControl required type="text" placeholder="Name" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="validationCustom01">
              <FormLabel>Email</FormLabel>
              <FormControl required type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="validationCustom01">
              <FormLabel>Message</FormLabel>
              <FormControl required as="textarea" placeholder="Message" />
            </FormGroup>
            <Button type="submit">Submit Form </Button>
          </Form>
        </Col>
        <Col>
          <div>
                  
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="" style={{ textDecoration: "none" }}>
                    Youtube
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" style={{ textDecoration: "none" }}>
                    LinkedIn
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" style={{ textDecoration: "none" }}>
                    Instagram
                  </a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="" style={{ textDecoration: "none" }}>
                    Twitter
                  </a>
                </ListGroupItem>
              </ListGroup>{" "}
          </div>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Contact;
