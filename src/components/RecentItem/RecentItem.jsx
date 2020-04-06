import "./RecentItem.css";

import { Card } from "react-bootstrap";
import React from "react";
import RoundCheck from "../RoundCheck";
import { formatDate } from "../../utils/Utils";

function RecentItem(props) {
  return (
    <Card className="recent-item-card">
      {/* thumbnail */}
      <div className="recent-item-thumbnail">
        {/* watched button checkbox */}
        <RoundCheck
          checked={props.recent.watched}
          onChange={props.onWatchedChange}
          style={{ margin: "1rem" }}
        />
      </div>

      {/* info and action buttons */}
      <div className="recent-item-info">
        {/* top info section */}
        <div style={{ padding: "1rem" }}>
          {/* TODO breadcrumbs scrollable */}

          {/* name */}
          <div>{props.recent.file.name}</div>
        </div>

        {/* action buttons */}
        <div className="recent-item-buttons-container"></div>
        
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
