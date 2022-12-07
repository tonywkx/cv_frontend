import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
import colorSharp2 from "../assets/img/color-sharp2.png";
import RSLang from "../assets/img/rslang.png"
import shelter from "../assets/img/shelter.png"
import migration from "../assets/img/migration.png"
import corejs from "../assets/img/corejs.png"
import virtkeyboard from "../assets/img/virtkeyboard.png"
import onlinestore from "../assets/img/onlinestore.png"
import sert from "../assets/img/Sert.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "RSLang App",
      description: "Приложение для изучения иностранного языка со встроенными мини играми",
      imgUrl: RSLang,
      deploy: 'https://johnevgit.github.io/rslang/',
    },
    {
      title: "Shelter",
      description: "Двухстраничный сайт приюта для животных",
      imgUrl: shelter,
      deploy: 'https://rolling-scopes-school.github.io/tonywkx-JSFE2022Q1/shelter/pages/main/',
    },
    {
      title: "Migration to Typescript",
      description: "Приложение по парсингу и фильтрации новостей с открытого API и использованием TypeScript",
      imgUrl: migration,
      deploy: 'https://rolling-scopes-school.github.io/tonywkx-JSFE2022Q1/migration-final/',
    },
    {
      title: "CoreJS",
      description: "Выполнил решение 101 алгоритмической задачи",
      imgUrl: corejs,
      deploy: 'https://github.com/tonywkx/core-js-101',
    },
    {
      title: "Virtual Keyboard",
      description: "Приложение полнофункциональной виртуальной клавиатуры",
      imgUrl: virtkeyboard,
      deploy: 'https://tonywkx.github.io/virtual-keyboard/',
    },
    {
      title: "Online Store",
      description: "Тестовый e-commerce мебели на React",
      imgUrl: onlinestore,
      deploy: 'https://tonywkx.github.io/onlineshop/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Ниже показываю выполненые проекты. По клику можно изучить деплои приложений,  а также исходный ход на моем GitHub-аккаунте</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Проекты</Nav.Link>
                    </Nav.Item>
                   
                    <Nav.Item>
                      <Nav.Link eventKey="third">RSSchool</Nav.Link>
                    </Nav.Item>
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
                   
                    <Tab.Pane eventKey="third">
                     
                        <Card  style={{ width: '90%', alignItems: 'center', margin:'0 auto', backgroundColor: 'black' }}>
                            <Card.Img  src={sert} />
                            
                            <Card.Body className="prod" style={{ backgroundColor: 'black'}}>
                            <form action="https://app.rs.school/certificate/1jhs4whj" target="_blank">
                                <button /* variant="primary" */><span>See digital version</span></button>
                            </form>
                                
                            </Card.Body>
                        </Card>
                    
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='img'></img>
    </section>
  )
}