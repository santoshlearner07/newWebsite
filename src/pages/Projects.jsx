import { motion } from "framer-motion";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import deathnote from "../images/deathnote.jpg";
import deathnote3 from "../images/deathnote3.jpg";
import groot from "../images/groot.jpg";
import thanos from "../images/thanos.jpg";
import thunder from "../images/thunder.jpg";
import avengeLogo from "../images/avengeLogo.jpg";

function Projects() {
  const ProjectList = [
    {
      id: 1,
      name: "Marketing Size",
      imageUrl: deathnote,
    },
    {
      id: 2,
      name: "CEO Size",
      imageUrl: deathnote3,
    },
    {
      id: 3,
      name: "Marketing Size",
      imageUrl: groot,
    },
    {
      id: 4,
      name: "CEO Size",
      imageUrl: thanos,
    },
    {
      id: 5,
      name: "Marketing Size",
      imageUrl: thunder,
    },
    {
      id: 6,
      name: "CEO Size",
      imageUrl: avengeLogo,
    },
  ];

// const ProjectList = "https://jsonplaceholder.typicode.com/photos";

  return (
    <motion.div
      className="text-center"
      animate={{
        scale: [2, 1],
        rotate: [180, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <h2 style={{ color: "aqua" }}>Projects</h2>
      <Row md={4} xs={1} sm={2}>
        {ProjectList.map((item) => {
          return (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            >
              <Col>
                <Card
                  style={{
                    padding: "5px",
                    marginTop: "10px",
                    backgroundColor: "black",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    style={{ height: "150px" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "aqua" }}>
                      {item.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </motion.div>
          );
        })}
      </Row>
    </motion.div>
  );
}

export default Projects;
