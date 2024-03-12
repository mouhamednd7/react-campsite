import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col md="4" className="text-center">
            <h5>Contact Information</h5>
          </Col>
          <Col md="4" className="text-center text-md-left">
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>
          <Col md="4" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto::notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;