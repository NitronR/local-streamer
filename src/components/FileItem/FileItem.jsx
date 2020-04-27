import "./FileItem.css";

import { Card } from "react-bootstrap";
import File from "../../filesystem/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import fileIcon from "../../images/icon.png";
import folderIcon from "../../images/folder_icon.png";

function FileItem(props) {
  let file = new File(props.path),
    gridTemp = "4rem auto" + (file.isDir ? " 3rem" : "");

  return (
    <Card
      className="file-item-card"
      text="white"
      style={{ backgroundColor: "#444444", marginTop: "4px", padding: 0 }}
    >
      {/* title */}
      <Card.Text>
        <div style={{ display: "grid", gridTemplateColumns: gridTemp }}>
          {/* Icon container */}
          <div
            onClick={() => props.onFileItemClick(file)}
            style={{
              backgroundColor: "#444444",
              height: "4rem",
              width: "100%",
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src={file.isDir ? folderIcon : fileIcon}
              style={{
                width: "2rem",
                height: "2rem",
              }}
              alt="File icon"
            />
          </div>

          {/* File name container */}
          <div
            onClick={() => props.onFileItemClick(file)}
            className="file-item-content"
            style={{
              backgroundColor: "#555555",
              display: "grid",
              alignContent: "center",
              padding: "1rem",
            }}
          >
            {file.name}
          </div>

          {/* Play random */}
          <div
            style={{
              display: file.isDir ? "grid" : "none",
              alignContent: "center",
              justifyContent: "center",
            }}
            onClick={() => props.onRandomClick(file)}
          >
            <FontAwesomeIcon icon={faRandom} />
          </div>
        </div>
      </Card.Text>
    </Card>
  );
}

FileItem.propTypes = {
  path: PropTypes.string.isRequired,
  onFileItemClick: PropTypes.func,
  onRandomClick: PropTypes.func,
};

export default FileItem;
