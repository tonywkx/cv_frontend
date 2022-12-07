/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import tgIcon from "../assets/img/tg.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://t.me/tonywk"><img src={tgIcon} alt="tg" /></a>
                <a href="https://instagram.com/tonycooles"><img src={navIcon3} alt="inst" /></a>
            </div>
            <div className="phone"><a href="tel:+79127449001">Tel: +7 (912) 744-90-01</a></div>   
            <p> &copy; 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}