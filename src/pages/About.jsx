import { motion, useScroll , useSpring } from "framer-motion";
import React from "react";

function About() {
  const { scrollYProgress } = useScroll ();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          background: "aqua",
          transformOrigin: "0",
          zIndex: 1050,
        }}
      ></motion.div>
      <div>
        <h1>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "Highlight" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
          <article style={{ color: "yellow" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quia quo quod delectus odit assumenda amet culpa recusandae sit
              laborum dolorem fuga aspernatur vel ex cum iste, dolorum nam
              necessitatibus!
            </p>
          </article>
        </h1>
      </div>
    </>
  );
}

export default About;
