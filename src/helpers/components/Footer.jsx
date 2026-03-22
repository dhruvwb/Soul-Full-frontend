import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import homeContent from "../../models/homeContent";

const socialIcons = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  youtube: <FaYoutube />
};

const Footer = () => (
  <footer className="home-footer">
    <Container>
      <Row>
        <Col md={4} className="mb-4">
          <h5>{homeContent.footer.companyName}</h5>
          <p>{homeContent.footer.description}</p>
          <div className="d-flex gap-3">
            {homeContent.footer.socials.map(social => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
              >
                {socialIcons[social.platform]}
              </a>
            ))}
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            {homeContent.footer.quickLinks.map(link => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={4} className="mb-4">
          <h6>Contact</h6>
          <p>{homeContent.footer.contact.phone}</p>
          <p>{homeContent.footer.contact.email}</p>
          <p>{homeContent.footer.contact.address}</p>
          <p>{homeContent.footer.contact.hours}</p>
        </Col>
      </Row>
    </Container>
    <div className="home-footer__bottom">{homeContent.footer.copyright}</div>
  </footer>
);

export default Footer;
