import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  Button,
  Accordion,
  Badge,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Spinner,
  Toast,
  ToastHeader,
  ToastBody
} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

function App() {
  const [alert, setAlert] = useState(false);
  const [canvas, setCanvas] = useState(false);

  return (
    <>
      <Container>
        <Row className="justify-content-center my-5">
          <Col md={5}>
            {!alert && (
              <Button variant="dark" onClick={() => setAlert(true)}>
                Throw ALert
              </Button>
            )}
            <Card className="my-3">
              {alert && (
                <Alert
                  variant="secondary"
                  onClose={() => setAlert(false)}
                  dismissible
                >
                  Are You Sure?
                </Alert>
              )}

              <Card.Body>
                <h2>
                  Maintain Hark working{" "}
                  <Badge className="mt-{-5}" bg="success">
                    -15%
                  </Badge>
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  architecto repellendus provident dolores reiciendis similique,
                  rerum ratione atque error, quisquam quaerat natus accusamus
                  tempore! Delectus nulla reiciendis ipsa nihil. Eius quas modi
                  harum provident consequatur tempora error, beatae doloribus
                  porro
                </p>
              </Card.Body>
            </Card>
            <Card className="mt-2">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>React Booststrap Detais</Accordion.Header>
                  <AccordionBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nobis quas recusandae? Odio, cupiditate aut totam
                    recusandae, eligendi atque minus dolor ratione harum
                    praesentium ab deserunt aliquid consequatur qui libero!
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Meterial UI Design</Accordion.Header>
                  <AccordionBody>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nobis quas recusandae? Odio, cupiditate aut totam
                    recusandae, eligendi atque minus dolor ratione harum
                    praesentium ab deserunt aliquid consequatur qui libero!
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
            </Card>
            <Button
              className="mt-3"
              onClick={() => setCanvas(true)}
              Show
              SideNav
            >
              {canvas && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
              )}
              Show SideNav
            </Button>
          </Col>
        </Row>
        <Toast>
        <ToastHeader className="justify-content-between">
          <strong>React Toast</strong>
          <small >30 second ago</small>
        </ToastHeader>
        <ToastBody>
        <p>
            Mr Bean. invite you to join{" "}
            <strong>Nupur selling Bangladesh</strong> You can visit now
          </p>
        </ToastBody>
      </Toast>
      </Container>

      <Offcanvas
        closeVariant="pink"
        show={canvas}
        onHide={() => setCanvas(false)}
      >
        <OffcanvasHeader closeButton>
          <h3>My Cart</h3>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero
            delectus recusandae, perferendis natus repellat similique optio
            nihil, itaque dicta deleniti quidem reprehenderit quia iure
            molestiae maxime exercitationem, cumque eligendi eum. Amet error
          </p>
        </OffcanvasBody>
      </Offcanvas>


    </>
  );
}

export default App;
