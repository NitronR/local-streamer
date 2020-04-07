import { Col, Container, Row } from "react-bootstrap";
import { allowedTypes, launchFile } from "../../filesystem/FileUtils";

import FileBrowser from "../../components/FileBrowser";
import React from "react";
import Recent from "../../models/Recent";
import RecentsList from "../../components/RecentsList/RecentsList";
import RecentsService from "../../data-services/RecentsService";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recents: RecentsService.getRecents() };

    this.handleFileItemClick = this.handleFileItemClick.bind(this);
  }
  render() {
    return (
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          {/* Recents section */}
          <Col style={{ padding: "1rem" }}>
            <h2>Recents</h2>
            <RecentsList
              recents={this.state.recents}
              onRecentsChange={(recents) => {
                this.setState({ recents });
                RecentsService.saveRecents(recents);
              }}
            />
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
      let recents = this.state.recents;
      recents.unshift(new Recent(file.path, new Date(Date.now()), false));
      this.setState({ recents: recents });

      RecentsService.saveRecents(recents);
    }
  }
}

export default HomePage;
