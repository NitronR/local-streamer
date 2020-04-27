import "bootstrap/dist/css/bootstrap.min.css";
import "./SettingsPage.css";

import { Button, Container } from "react-bootstrap";

import PathSetting from "../../components/PathSetting";
import React from "react";
import cogoToast from "cogo-toast";
import { connect } from "react-redux";
import { getSettingsState } from "../../state/selectors";
import { saveSettings } from "../../state/actions";

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootPath: props.rootPath,
    };

    this.handleRootSelect = this.handleRootSelect.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }
  render() {
    return (
      <Container>
        <div id="settings-card">
          {/* Settings heading */}
          <h3 className="text-center" style={{ marginBottom: "1.5rem" }}>
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
    this.props.saveSettings(this.state);
    cogoToast.success("Settings saved.");
  }
}

const mapStateToProps = (state) => getSettingsState(state);

export default connect(mapStateToProps, { saveSettings })(SettingsPage);
