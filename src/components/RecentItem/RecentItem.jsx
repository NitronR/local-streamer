import "./RecentItem.css";

import {
  faBackward,
  faForward,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RoundCheck from "../RoundCheck";
import { formatDate } from "../../utils/Utils";

function RecentItem(props) {
  return (
    <Card className="recent-item-card">
      {/* thumbnail */}
      <div className="recent-item-thumbnail">
        {/* delete button */}
        <span
          className="round-button round-button-small"
          onClick={props.onDeleteClick}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>

        {/* watched button checkbox */}
        <RoundCheck
          checked={props.recent.watched}
          onChange={props.onWatchedChange}
          style={{ justifySelf: "end" }}
        />
      </div>

      {/* info and action buttons */}
      <div className="recent-item-info">
        {/* top info section */}
        <div style={{ padding: "1rem", wordBreak: "break-all" }}>
          {/* TODO breadcrumbs scrollable */}

          {/* name */}
          <div>{props.recent.file.name}</div>
        </div>

        {/* action buttons */}
        <div className="recent-item-buttons-container">
          {/* previous count */}
          <div className="round-button round-button-tiny">
            {props.recent.prevCount}
          </div>

          {/* play previous button */}
          <div
            className="round-button round-button-small"
            onClick={props.onPrevClick}
          >
            <FontAwesomeIcon icon={faBackward} />
          </div>

          {/* play button */}
          <div className="round-button" onClick={props.onPlayClick}>
            <FontAwesomeIcon icon={faPlay} />
          </div>

          {/* play next button */}
          <div
            className="round-button round-button-small"
            onClick={props.onNextClick}
          >
            <FontAwesomeIcon icon={faForward} />
          </div>

          {/* next count */}
          <div className="round-button round-button-tiny">
            {props.recent.nextCount}
          </div>
        </div>

        {/* bottom bar */}
        <div className="recent-item-bottom-bar">
          {/* date */}
          <span>{formatDate(props.recent.date, "mmm dd, yyyy")}</span>

          {/* time */}
          <span style={{ justifySelf: "end" }}>
            {formatDate(props.recent.date, "h:MM TT")}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default RecentItem;
