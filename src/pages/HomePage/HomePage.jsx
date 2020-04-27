import { Col, Container, Row } from "react-bootstrap";
import {
  allowedTypes,
  getAllFilePaths,
  launchFile,
} from "../../filesystem/FileUtils";

import FileBrowser from "../../components/FileBrowser";
import React from "react";
import Recent from "../../models/Recent";
import RecentsList from "../../components/RecentsList/RecentsList";
import { addRecent } from "../../state/actions";
import { connect } from "react-redux";
import { isAllowedType } from "../../filesystem/File";
import { randomInt } from "../../utils/Utils";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleFileItemClick = this.handleFileItemClick.bind(this);
    this.handleRandomClickDir = this.handleRandomClickDir.bind(this);
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
              onRandomClickDir={this.handleRandomClickDir}
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
  handleRandomClickDir(file) {
    // select a random file path
    let filePaths = getAllFilePaths(file.path, isAllowedType);
    let randomIndex = randomInt(0, filePaths.length - 1);
    let randomPath = filePaths[randomIndex];

    // play the random file
    launchFile(randomPath);

    // add recent
    let recent = new Recent(randomPath, new Date(Date.now()), false);
    this.props.addRecent(recent);
  }
}

export default connect(null, { addRecent })(HomePage);
