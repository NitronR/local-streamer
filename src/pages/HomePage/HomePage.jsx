import { Col, Container, Row } from "react-bootstrap";
import { allowedTypes, launchFile } from "../../filesystem/FileUtils";

import FileBrowser from "../../components/FileBrowser";
import React from "react";
import Recent from "../../models/Recent";
import RecentsList from "../../components/RecentsList/RecentsList";
import { addRecent } from "../../state/actions";
import { connect } from "react-redux";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleFileItemClick = this.handleFileItemClick.bind(this);
  }
  render() {
    return (
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          {/* Recents section */}
          <Col style={{ padding: "1rem" }}>
            <h2>Recents</h2>
            <RecentsList />
          </Col>

          {/* Files section */}
          <Col style={{ padding: "1rem" }}>
            <h2>Files</h2>
            <FileBrowser
              allowedFileTypes={allowedTypes}
              onFileItemClick={this.handleFileItemClick}
            />
          </Col>
        </Row>
      </Container>
    );
  }
  handleFileItemClick(file) {
    if (!file.isDir) {
      launchFile(file.path);

      // add to recents
      let recent = new Recent(file.path, new Date(Date.now()), false);
      this.props.addRecent(recent);
    }
  }
}

export default connect(null, { addRecent })(HomePage);
