import "./RecentItem.css";

import { Card } from "react-bootstrap";
import React from "react";

function RecentItem(props) {
  return (
    <Card style={{ backgroundColor: "#444" }}>
      <Card.Text>
        <div>{props.recent.file.path}</div>
        <div>{props.recent.file.name}</div>
        <div>{props.recent.watched.toString()}</div>
        <div>{props.recent.date.toString()}</div>
      </Card.Text>
    </Card>
  );
}

export default RecentItem;
