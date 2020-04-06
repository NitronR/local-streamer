import "./RecentsList.css";

import PropTypes from "prop-types";
import React from "react";
import RecentItem from "../RecentItem";

function RecentsList(props) {
  return (
    <div>
      {/* Recent items */}
      {props.recents.map((recent) => (
        <RecentItem recent={recent} />
      ))}
    </div>
  );
}

RecentsList.propTypes = {
  recents: PropTypes.array.isRequired,
};

export default RecentsList;
