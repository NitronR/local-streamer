import "./PathSelectButton.css";

import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import folderIcon from "../../images/folder_icon.png";

function PathSelectButton(props) {
  if (!props.size) props.size = "normal";

  let defaultPath = props.defaultPath ? props.defaultPath : "";

  // handles click, shows path select dialog and returns path via callback
  function onButtonClick() {
    // show select path dialog
    const { dialog } = window.require("electron").remote;
    dialog
      .showOpenDialog({
        default: defaultPath,
        properties: ["openDirectory"],
      })
      .then((result) => {
        if (!result.canceled) {
          let path = result.filePaths[0];
          // callback to parent
          props.onPathSelect(path);
        }
      });
  }

  let style = {
    margin: "auto",
    backgroundColor: "#333333",
    padding: 0,
  };

  if ("btStyle" in props) {
    style = Object.assign({}, style, props.btStyle);
  }

  return (
    <Button
      variant="dark"
      className={"bt-path-sel-" + props.size}
      style={style}
      onClick={onButtonClick}
    >
      <img
        src={folderIcon}
        className={"img-path-sel-" + props.size}
        style={{
          marginTop: "-5px",
        }}
        alt="Folder icon"
      />
    </Button>
  );
}

PathSelectButton.propTypes = {
  size: PropTypes.oneOf(["small", "normal"]),
  defaultPath: PropTypes.string,
  onPathSelect: PropTypes.func.isRequired,
  btStyle: PropTypes.object,
};

export default PathSelectButton;
