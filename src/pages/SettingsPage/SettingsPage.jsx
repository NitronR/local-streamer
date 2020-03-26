import "bootstrap/dist/css/bootstrap.min.css";
import "./SettingsPage.css";

import { Button, Container, Jumbotron } from "react-bootstrap";

import PathSetting from "../../components/SettingItem/PathSetting";
import React from "react";
import SettingsService from "../../data-services/SettingsService";
import cogoToast from "cogo-toast";

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = SettingsService.readSettings();

    this.handleRootSelect = this.handleRootSelect.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }
  render() {
    return (
      <Container>
        <div id="settings-card">
          {/* Settings heading */}
          <h3 className="text-center" style={{ "margin-bottom": "1.5rem" }}>
            Settings
          </h3>

          {/* root path setting */}
          <PathSetting
            title="Root path"
            description="The path used by the file browser when the app is first opened."
            path={this.state.rootPath}
            onPathSelect={this.handleRootSelect}
          />

          {/* save button */}
          <div className="text-center">
            <Button
              id="bt-save-settings"
              variant="danger"
              onClick={this.saveSettings}
            >
              Save
            </Button>
          </div>
        </div>
      </Container>
    );
  }
  handleRootSelect(path) {
    this.setState({ rootPath: path });
  }
  saveSettings() {
    SettingsService.saveSettings(this.state);
    cogoToast.success("Settings saved.");
  }
}

export default SettingsPage;
