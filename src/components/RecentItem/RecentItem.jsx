import "./RecentItem.css";

import { Card } from "react-bootstrap";
import React from "react";
import RoundCheck from "../RoundCheck";

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
          {/* breadcrumbs */}
          <div>{props.recent.file.path}</div>
          {/* name */}
          <div>{props.recent.file.name}</div>
        </div>
        {/* bottom bar */}
        <div className="recent-item-bottom-bar">
          {/* action buttons */}
          <div className="recent-item-buttons-container"></div>

          {/* date */}

          <div>{props.recent.date.toString()}</div>
          {/* time */}
        </div>
      </div>
    </Card>
  );
}

export default RecentItem;
