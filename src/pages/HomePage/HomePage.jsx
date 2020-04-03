import { Col, Container, Row } from "react-bootstrap";

import FileBrowser from "../../components/FileBrowser";
import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={{ marginTop: "1rem" }}>

        <Row>

          {/* Recents section */}
          <Col style={{ padding: "1rem" }}>
            <h2>Recents</h2>
          </Col>

          {/* Files sectio */}
          <Col style={{ padding: "1rem" }}>
            <h2>Files</h2>
            <FileBrowser />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
