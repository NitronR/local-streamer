import "./PathBar.css";

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
                backgroundColor: "#444444"
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
                padding: 0
              }}
              onClick={this.handleBackClick}
            >
              <FontAwesomeIcon icon={faArrowUp} style={{ margin: "auto" }} />
            </Button>

            {/* breadcrumbs */}
            {(() => {
              let dirNames = this.state.currentDir.path
                .split("\\")
                .filter(e => e != "");
              let breadCrumbs = [
                { path: dirNames[0] + "\\", dirName: dirNames[0] }
              ];

              for (let index = 1; index < dirNames.length; index++) {
                breadCrumbs.push({
                  path: breadCrumbs[index - 1].path + dirNames[index] + "\\",
                  dirName: dirNames[index]
                });
              }

              return breadCrumbs.map(breadCrumb => (
                <Button
                  variant="dark"
                  style={{
                    height: "2rem",
                    backgroundColor: "#444444",
                    fontSize: "0.8rem",
                    marginLeft: "2px",
                    marginTop: "3px",
                    paddingTop: 0,
                    paddingBottom: 0
                  }}
                  onClick={() => this.changePath(breadCrumb.path)}
                >
                  {breadCrumb.dirName}
                </Button>
              ));
            })()}
          </div>
        )}
      </div>
    );
  }
  handleBackClick() {
    let parent = this.state.currentDir.getParent();
    if (parent.exists) this.changePath(parent.path);
  }
  changePath(path) {
    this.setState({ currentDir: new File(path) });
  }
}

PathBar.propTypes = {
  rootPath: PropTypes.string.isRequired
};

export default PathBar;
