import "./RecentsList.css";

import {
  playNextRecent,
  playPrevRecent,
  playRecent,
  removeRecent,
  updateRecent,
} from "../../state/actions";

import PropTypes from "prop-types";
import React from "react";
import RecentItem from "../RecentItem";
import { connect } from "react-redux";
import { getRecentsState } from "../../state/selectors";

function RecentsList(props) {
  if (props.recents.length === 0) return "No recents.";
  return (
    <div>
      {/* Recent items */}
      {props.recents.map((recent, index) => (
        <RecentItem
          key={recent.getId()}
          recent={recent}
          onWatchedChange={(value) => {
            props.updateRecent(index, { watched: value });
          }}
          onPlayClick={() => {
            props.playRecent(index);
          }}
          onNextClick={() => {
            props.playNextRecent(index);
          }}
          onPrevClick={() => {
            props.playPrevRecent(index);
          }}
          onDeleteClick={() => {
            props.removeRecent(index);
          }}
        />
      ))}
    </div>
  );
}

RecentsList.propTypes = {
  recents: PropTypes.array.isRequired,
};

let mapStateToProps = (store) => ({
  recents: getRecentsState(store),
});

export default connect(mapStateToProps, {
  playRecent,
  updateRecent,
  playNextRecent,
  playPrevRecent,
  removeRecent,
})(RecentsList);
