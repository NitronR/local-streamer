import "./RecentsList.css";

import PropTypes from "prop-types";
import React from "react";
import Recent from "../../models/Recent";
import RecentItem from "../RecentItem";
import { launchFile } from "../../filesystem/FileUtils";

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
          onPlayClick={() => {
            let recents = props.recents;
            recents.splice(index, 1);
            recents.unshift(recent);
            launchFile(recent.file.path);
            props.onRecentsChange(recents);
          }}
          onNextClick={() => {
            let recents = props.recents;
            let recent = recents[index];
            let nextFile = recent.file.getNext();

            if (nextFile) {
              let newRecent = new Recent(
                nextFile.path,
                new Date(Date.now()),
                false
              );
              recents.splice(index, 1);
              recents.unshift(newRecent);
              launchFile(newRecent.path);
            } else {
              // TODO
            }
            props.onRecentsChange(recents);
          }}
          onPrevClick={() => {
            let recents = props.recents;
            let recent = recents[index];
            let prevFile = recent.file.getPrevious();

            if (prevFile) {
              let newRecent = new Recent(
                prevFile.path,
                new Date(Date.now()),
                false
              );
              recents.splice(index, 1);
              recents.unshift(newRecent);
              launchFile(newRecent.path);
            } else {
              // TODO
            }
            props.onRecentsChange(recents);
          }}
          onDeleteClick={() => {
            let recents = props.recents;
            recents.splice(index, 1);
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
