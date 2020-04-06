import "./FileItem.css";

import { Card, Col, Row } from "react-bootstrap";

import File from "../../filesystem/File";
import PropTypes from "prop-types";
import React from "react";
import fileIcon from "../../images/icon.png";
import folderIcon from "../../images/folder_icon.png";

function FileItem(props) {
  let file = new File(props.path);

  function handleClick() {
    if (file.isDir) props.onDirClick(file.path);
  }

  return (
    <Card
      className="file-item-card"
      text="white"
      style={{ "background-color": "#444444", marginTop: "1rem", padding: 0 }}
      onClick={handleClick}
    >
      {/* title */}
      <Card.Text>
        <div style={{ display: "grid", gridTemplateColumns: "4rem auto" }}>
          {/* Icon container */}
          <div
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
        </div>
        {/* <Row>
          <Col xs="auto" style={{ backgroundColor: "#444444", height: "100%" }}>
            <img
              src={file.isDir ? folderIcon : fileIcon}
              style={{
                margin: "auto",
                width: "2rem",
                height: "2rem",
                margin: "auto",
              }}
              alt="File icon"
            />
          </Col>
          <Col
            xs={10}
            style={{
              "background-color": "#555555",
              height: "100%",
              padding: "1rem",
            }}
          >
            {file.name}
          </Col>
        </Row> */}
      </Card.Text>
    </Card>
  );
}

FileItem.propTypes = {
  path: PropTypes.string.isRequired,
  onDirClick: PropTypes.func,
};

export default FileItem;
