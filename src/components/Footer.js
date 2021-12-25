import React from "react";
import contactNow from "./../assets/images/contact.png";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">INFORMATION</h4>
                <ul className="information">
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">Payment Options</a>
                  </li>
                  <li>
                    <a href="/home">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/home">Refund Policy</a>
                  </li>
                </ul>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">CUSTOMER SERVICE</h4>
                <ul className="information">
                  <li>
                    <a href="/home">FAQs</a>
                  </li>
                  <li>
                    <a href="/home">MyMobileZone</a>
                  </li>
                  <li>
                    <a href="/home">Store Locator</a>
                  </li>
                  <li>
                    <a href="/home">All About Feet</a>
                  </li>
                  <li>
                    <a href="/home">Contact Info</a>
                  </li>
                  <li>
                    <a href="/home">Delivery</a>
                  </li>
                </ul>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Reach us</h4>

                <ul className="information contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Chittagong, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: fahimjahin321@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +8801829346731
                  </li>
                  <li>
                    <i className="fas fa-fax"></i>
                    Fax: 176300000
                  </li>
                </ul>
              </Zoom>
            </Col>{" "}
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Pay us with</h4>
                <img width="100%" src={contactNow} alt="" />
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">Copyright &copy; 2021 Md Gulamur Rahman All Reserved</p>
      </div>
    </>
  );
};

export default Footer;
