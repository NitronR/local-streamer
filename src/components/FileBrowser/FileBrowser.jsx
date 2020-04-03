import PathBar from "./PathBar";
import React from "react";
import SettingsService from "../../data-services/SettingsService";

class FileBrowser extends React.Component {
  constructor(props) {
    super(props);

    // get settings
    let settings = SettingsService.getSettings();

    // set initial state
    this.state = { currentPath: settings.rootPath };
  }
  render() {
    return (
      <div>
        <PathBar rootPath={this.state.currentPath} />
      </div>
    );
  }
}

export default FileBrowser;
