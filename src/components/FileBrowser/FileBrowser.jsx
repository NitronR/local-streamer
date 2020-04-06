import File from "../../filesystem/File";
import FileItem from "../FileItem";
import PathBar from "./PathBar";
import React from "react";
import SettingsService from "../../data-services/SettingsService";
import { getFileList } from "../../filesystem/FileUtils";

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
            onDirClick={(path) => this.changePath(path)}
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
    filePaths.push(...files.map((file) => file.path));

    return filePaths;
  }
}

export default FileBrowser;
