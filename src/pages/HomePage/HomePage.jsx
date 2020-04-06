import { Col, Container, Row } from "react-bootstrap";

import FileBrowser from "../../components/FileBrowser";
import React from "react";

function HomePage() {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        {/* Recents section */}
        <Col style={{ padding: "1rem" }}>
          <h2>Recents</h2>
        </Col>

        {/* Files section */}
        <Col style={{ padding: "1rem" }}>
          <h2>Files</h2>
          <FileBrowser
            allowedFileTypes={["mp4", "mov", "avi", "wmv", "mkv", "flv"]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
