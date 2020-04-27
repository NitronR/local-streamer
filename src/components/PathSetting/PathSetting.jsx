import { Card, Col, Row } from "react-bootstrap";

import PathSelectButton from "../PathSelectButton";
import PropTypes from "prop-types";
import React from "react";

class PathSetting extends React.Component {
  constructor(props) {
    super(props);
    this.onPathSelect = this.onPathSelect.bind(this);
  }
  render() {
    return (
      <Card text="white" style={{ backgroundColor: "#444444" }}>
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
                      fontWeight: "bold",
                    }}
                  >
                    {this.props.path}
                  </div>
                )}
              </Col>
              {/* path select button */}
              <Col xs="auto">
                <PathSelectButton
                  size="normal"
                  onPathSelect={this.onPathSelect}
                  defaultPath={this.props.path}
                />
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  onPathSelect(path) {
    // callback to parent
    this.props.onPathSelect(path);
  }
}

PathSetting.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  onPathSelect: PropTypes.func.isRequired,
};

export default PathSetting;
