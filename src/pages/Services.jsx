import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";

function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(res.data.splice(0,10));
    };
    fetchUser();
  }, []);

  console.log(data);

  return (
    <>
      <h2 style={{ color: "aqua" }}>Services</h2>
      <Row md={4} xs={1} sm={2}>
        {data.map((item) => {
          return (
            <Col style={{ padding: "20px" }} key={item.id}>
              <Card
                style={{
                  padding: "5px",
                  marginTop: "10px",
                  backgroundColor: "black",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.thumbnailUrl}
                  style={{ height: "150px" }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "aqua" }}>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Services;

// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { Card, Col, Row } from "react-bootstrap";
// import Avenger from "../images/Avenger.jpg";
// import PantherLogo from "../images/PantherLogo.jpg";
// import thanos from "../images/thanos.jpg";
// import thunder from "../images/thunder.jpg";
// import avengeLogo from "../images/avengeLogo.jpg";
// import axios from "axios";

// function Services() {
//   const ServicesList = [
//     {
//       id: 1,
//       name: "Marketing Size",
//       imageUrl: Avenger,
//     },
//     {
//       id: 2,
//       name: "CEO Size",
//       imageUrl: PantherLogo,
//     },
//     {
//       id: 3,
//       name: "Marketing Size",
//       imageUrl: thanos,
//     },
//     {
//       id: 4,
//       name: "CEO Size",
//       imageUrl: thunder,
//     },
//     {
//       id: 5,
//       name: "Marketing Size",
//       imageUrl: avengeLogo,
//     },
//     {
//       id: 6,
//       name: "CEO Size",
//       imageUrl: PantherLogo,
//     },
//   ];

// const [data,setData] = useState([])

// useEffect(()=>{
// const fetchUser =async () =>{
//   const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
// setData(res.data)
// }
// fetchUser();
// },[])

// console.log(data)

//   return (
//     <motion.div
//       className="text-center"
//       initial={{ scaleY: 0 }}
//       animate={{
//         scaleY: 1,
//       }}
//       exit={{ scaleY: 0 }}
//       transition={{
//         duration: 1,
//         ease: "easeInOut",
//       }}
//     >
//       <h2 style={{ color: "aqua" }}>Services</h2>
//       <Row md={4} xs={1} sm={2}>
//         {ServicesList.map((item) => {
//           return (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
//             >
//               <Col style={{ padding: "20px" }}>
//                 <Card
//                   style={{
//                     padding: "5px",
//                     marginTop: "10px",
//                     backgroundColor: "black",
//                   }}
//                 >
//                   <Card.Img
//                     variant="top"
//                     src={item.imageUrl}
//                     style={{ height: "150px" }}
//                   />
//                   <Card.Body>
//                     <Card.Title style={{ color: "aqua" }}>
//                       {item.name}
//                     </Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </motion.div>
//           );
//         })}
//       </Row>
//     </motion.div>
//   );
// }

// export default Services;
