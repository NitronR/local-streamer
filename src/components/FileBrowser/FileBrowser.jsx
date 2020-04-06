import { getFileList, launchFile } from "../../filesystem/FileUtils";

import File from "../../filesystem/File";
import FileItem from "../FileItem";
import PathBar from "./PathBar";
import PropTypes from "prop-types";
import React from "react";
import SettingsService from "../../data-services/SettingsService";

class FileBrowser extends React.Component {
  constructor(props) {
    super(props);

    // get settings
    let settings = SettingsService.getSettings();

    // set initial state
    this.state = {
      currentPath: settings.rootPath,
      filePaths: this.getFilePaths(settings.rootPath),
    };

    this.getFilePaths = this.getFilePaths.bind(this);
  }

  render() {
    return (
      <div>
        <PathBar
          rootPath={this.state.currentPath}
          onPathChange={(path) => this.changePath(path)}
        />

        {/* File items */}
        {this.state.filePaths.map((path) => (
          <FileItem
            style={{ margin: "2px" }}
            path={path}
            onFileItemClick={(file) => {
              if (file.isDir) this.changePath(file.path);
              else launchFile(file.path);
            }}
          />
        ))}
      </div>
    );
  }

  changePath(path) {
    this.setState({
      currentPath: path,
      filePaths: this.getFilePaths(path),
    });
  }

  // get the paths of files in the given directory path
  // formats the array for displaying the file list
  getFilePaths(path) {
    let files = getFileList(path).map((path) => new File(path));

    // natural sort
    files.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

    // move directories above files
    let dirs = files.filter((file) => file.isDir);
    files = files.filter((file) => !file.isDir);

    let filePaths = dirs.map((dirFile) => dirFile.path);

    // keep only the allowed file types
    files = files.filter((file) =>
      this.props.allowedFileTypes.includes(file.extension)
    );

    filePaths.push(...files.map((file) => file.path));

    return filePaths;
  }
}

FileBrowser.propTypes = {
  allowedFileTypes: PropTypes.array,
};

export default FileBrowser;
