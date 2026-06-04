---
tags:
  - projects
  - projects/GitHub
---
# Dupe Viewer

A simple proof-of-concept VS Code extension to highlight duplicate code.

## Features
- Highlight duplicate code in any language supported by [jscpd](https://jscpd.dev/).
- Create Problems in the VS Code Problems panel for each instance in the currently open files.
####
Example:

![screenshot](https://raw.githubusercontent.com/GitGeddes/DupeViewer/refs/heads/main/assets/screenshot.png)

## Requirements
This extension requires you to have already run an analysis on duplicate code using [jscpd](https://jscpd.dev/) with the JSON output enabled.

## Known issues
- Sometimes the entries can get duplicated in the Problems panel.