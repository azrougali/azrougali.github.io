import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food Delivery",
      description: "Sign In / Sign Up ( Firebase Auth ) ,a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. Manage multiple orders, delivery locations, and customers at the same time Deliver orders within an optimal period of time",
      imgUrl: "https://www.royex.ae/media/5530/phone2.jpg",
    },
    {
      title: "Sihati App",
      description: "Online Consultation Around The World, clean and high-quality care. Through “e-Medicall” a patient can find doctors across the Globe, where within a few minutes treatment will reach them. Not only the doctors nearby but also the doctors who are far away to reach and also to save our time our “e-Medicall ” site is very useful.",
      imgUrl: "https://i.pinimg.com/originals/6c/31/53/6c3153449f78f121a64141c9490bb2e8.jpg",
    },
    {
      title: "Jibli Rapide App",
      description: "Jibli guarantees to customers the transport of the orders with the advantage of the payment on delivery, in all security and professionalism.You can check, track or cancel your order at any time",
      imgUrl: "https://www.track-pod.com/assets/Uploads/_resampled/ResizedImageWzkwMCw2NzVd/Track-POD-proof-of-delivery-app.jpg",
    },
    {
      title: "ERP with Odoo",
      description: "the creation of an ERP to facilitate the management of many educational activities in a private school.",
      imgUrl: "https://www.phpscriptsonline.com/wp-content/uploads/2019/06/EMS-1.png",
    },
    {
      title: "Action Recognition",
      description: "Classification video  with CNN/LSTM Algorithme",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrT5jxmLdBSXjrFCqf_rocTN1VKryeiIKWKzSND7gTSZDmFOwe65ljYfTd1DnNOIAJMc&usqp=CAU",
    },
    {
      title: "Web site arômes parfums algerie",
      description: "a website for company carinsa algeria, for the representation of the products",
      imgUrl: "https://www.uniquewebdevelopment.com/wp-content/uploads/franceparfum-products.jpg",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I will present the best projects in two last years ,Mobile and Web Development</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
