import "./RecentsList.css";

import PropTypes from "prop-types";
import React from "react";
import RecentItem from "../RecentItem";

function RecentsList(props) {
  return (
    <div>
      {/* Recent items */}
      {props.recents.map((recent, index) => (
        <RecentItem
          recent={recent}
          onWatchedChange={(value) => {
            let recents = props.recents;
            recents[index].watched = value;
            props.onRecentsChange(recents);
          }}
        />
      ))}
    </div>
  );
}

RecentsList.propTypes = {
  recents: PropTypes.array.isRequired,
  onRecentsChange: PropTypes.func.isRequired,
};

export default RecentsList;
