import "./RoundCheck.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function RoundCheck(props) {
  return (
    <span
      className={
        "round-check round-check-" + (props.checked ? "checked" : "unchecked")
      }
      onClick={() => {
        props.onChange(!props.checked);
      }}
    >
      <FontAwesomeIcon icon={faCheck} />
    </span>
  );
}

RoundCheck.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default RoundCheck;
