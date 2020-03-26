import { Button, Card, Col, Row } from "react-bootstrap";

import PropTypes from "prop-types";
import React from "react";
import folderIcon from "../../images/folder_icon.png";

class PathSetting extends React.Component {
  constructor(props) {
    super(props);
    this.selectPath = this.selectPath.bind(this);
  }
  render() {
    return (
      <Card text="white" style={{ "background-color": "#444444" }}>
        {/* title */}
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <Row>
              {/* description */}
              <Col xs={10}>
                {this.props.description}

                {/* selected path */}
                {this.props.path !== "" && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontWeight: "bold"
                    }}
                  >
                    {this.props.path}
                  </div>
                )}
              </Col>
              {/* path select button */}
              <Col xs="auto">
                <Button
                  variant="dark"
                  style={{
                    margin: "auto",
                    backgroundColor: "#333333",
                    width: "3rem",
                    height: "3rem"
                  }}
                  onClick={this.selectPath}
                >
                  <img
                    src={folderIcon}
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      marginTop: "-5px"
                    }}
                  />
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  selectPath() {
    // show select path dialog
    const { dialog } = window.require("electron").remote;
    dialog
      .showOpenDialog({
        default: this.props.path,
        properties: ["openDirectory"]
      })
      .then(result => {
        if (!result.canceled) {
          let path = result.filePaths[0];
          // callback to parent
          this.props.onPathSelect(path);
        }
      });
  }
}

PathSetting.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  onPathSelect: PropTypes.func.isRequired
};

export default PathSetting;
