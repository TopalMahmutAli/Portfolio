import {Container, Col, Row} from "react-bootstrap";
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css2.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/java.png";
import meter5 from "../assets/img/python.png";
import meter6 from "../assets/img/php.png";
import meter7 from "../assets/img/vuejs.png";
import meter8 from "../assets/img/mysql.png";
import meter9 from "../assets/img/docker.jpeg";
import meter10 from "../assets/img/github.png";
import meter11 from "../assets/img/jupyter.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Compétence</h2>
                            <p>Les compétences informatiques que j'ai acquises pendant mon BUT.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div className="item">
                                <img src={meter1} alt="HTML" className="skill-image" />
                                <h5>HTML</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="CSS" className="skill-image" />
                                  <h5>CSS</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Javascript" className="skill-image skill-image-special" />
                                  <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                  <img src={meter4} alt="Java" className="skill-image" />
                                  <h5>Java</h5>
                              </div>
                              <div className="item">
                                  <img src={meter5} alt="Python" className="skill-image" />
                                  <h5>Python</h5>
                              </div>
                              <div className="item">
                                  <img src={meter6} alt="Php" className="skill-image skill-image-special" />
                                  <h5>PHP</h5>
                              </div>
                              <div className="item">
                                  <img src={meter7} alt="VueJS" className="skill-image" />
                                  <h5>VueJS</h5>
                              </div>
                              <div className="item">
                                  <img src={meter8} alt="MySQL" className="skill-image skill-image-special" />
                                  <h5>MySQL</h5>
                              </div>
                              <div className="item">
                                  <img src={meter10} alt="GitHub" className="skill-image skill-image-special" />
                                  <h5>GitHub</h5>
                              </div>
                              <div className="item">
                                  <img src={meter9} alt="Docker" className="skill-image skill-image-special" />
                                  <h5>Docker</h5>
                              </div>
                              <div className="item">
                                  <img src={meter11} alt="JupyterNotebook" className="skill-image skill-image-special" />
                                  <h5>JupyterNotebook</h5>
                              </div>
                              

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
    }