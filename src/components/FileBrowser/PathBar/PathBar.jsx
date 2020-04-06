import "./PathBar.css";

import BreadCrumbs from "../../BreadCrumbs";
import { Button } from "react-bootstrap";
import File from "../../../filesystem/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PathSelectButton from "../../../components/PathSelectButton";
import PropTypes from "prop-types";
import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

class PathBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentDir: new File(props.rootPath) };

    this.handleBackClick = this.handleBackClick.bind(this);
    this.changePath = this.changePath.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ currentDir: new File(nextProps.rootPath) });
  }
  render() {
    return (
      <div>
        {!this.state.currentDir.exists && "Path does not exist"}
        {this.state.currentDir.exists !== "" && (
          <div>
            {/* path select button */}
            <PathSelectButton
              onPathSelect={this.changePath}
              size="small"
              btStyle={{
                margin: "3px 0px 0px 0px",
                backgroundColor: "#444444",
              }}
            />

            {/* back button */}
            <Button
              variant="dark"
              style={{
                width: "2rem",
                marginTop: "3px",
                height: "2rem",
                backgroundColor: "#444444",
                fontSize: "0.8rem",
                marginLeft: "2px",
                padding: 0,
              }}
              onClick={this.handleBackClick}
            >
              <FontAwesomeIcon icon={faArrowUp} style={{ margin: "auto" }} />
            </Button>

            {/* breadcrumbs */}
            <BreadCrumbs
              path={this.state.currentDir.path}
              onCrumbClick={this.changePath}
            />
          </div>
        )}
      </div>
    );
  }
  // set path as parent
  handleBackClick() {
    let parent = this.state.currentDir.getParent();
    if (parent.exists) this.changePath(parent.path);
  }
  changePath(path) {
    this.setState({ currentDir: new File(path) });

    if (this.props.onPathChange) this.props.onPathChange(path);
  }
}

PathBar.propTypes = {
  rootPath: PropTypes.string.isRequired,
  onPathChange: PropTypes.func,
};

export default PathBar;
