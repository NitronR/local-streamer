import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";

function BreadCrumbs(props) {
  let dirNames = props.path.split("\\").filter((e) => e !== "");
  let breadCrumbs = [{ path: dirNames[0] + "\\", dirName: dirNames[0] }];

  for (let index = 1; index < dirNames.length; index++) {
    breadCrumbs.push({
      path: breadCrumbs[index - 1].path + dirNames[index] + "\\",
      dirName: dirNames[index],
    });
  }

  return breadCrumbs.map((breadCrumb, index) => (
    <Button
      key={index}
      variant="dark"
      style={{
        height: "2rem",
        backgroundColor: "#444444",
        fontSize: "0.8rem",
        marginLeft: "2px",
        marginTop: "3px",
        paddingTop: 0,
        paddingBottom: 0,
      }}
      onClick={() => props.onCrumbClick(breadCrumb.path)}
    >
      {breadCrumb.dirName}
    </Button>
  ));
}

BreadCrumbs.propTypes = {
  path: PropTypes.string.isRequired,
  onCrumbClick: PropTypes.func,
};

export default BreadCrumbs;
