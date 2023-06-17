# [4.2.0](https://github.com/ansulagrawal/react-big-schedule/compare/4.0.0...4.2.0) (2023-06-17)

### Bug Fixes

- Fix the default export file `index.js`.
- Fix the `antd locale` and `dayjs locale`.
- Remove `main.jsx` from the build directory.

### Major Changes

- Fix Importing issue in projects as `src/index.js` file was not properly written.
- Added `type-definitions` for the library.
- Fix the locale for both library `antd` and `dayjs`.
- Fix the `package.json` main parameter value.

### BREAKING CHANGES

- The default export file index.js has been fixed. This may impact projects that were relying on the previous behavior of the file. Please ensure that your project's imports and dependencies are updated accordingly to use the new index.js file.

- The antd and dayjs libraries' locales have been fixed. This may affect projects that were relying on specific locale configurations or were using different locales. Please review your project's usage of these libraries and update any necessary configurations or code that relies on locales.

- The file main.jsx has been removed from the build directory. If your project was directly referencing or depending on this file, you will need to update your code to remove any references to main.jsx and make necessary adjustments to your project's structure.

- The `src/index.js` file has been fixed to resolve importing issues in projects. This change may require modifications to your project's import statements to ensure they correctly reference the updated src/index.js file.

- Type definitions have been added for the library. If your project was relying on the absence of type definitions or using custom typings, you may need to update your code to accommodate the newly added type definitions.

- The package.json file's main parameter value has been fixed. Previously, it was set to lib/index, but it has now been changed to dist/index.js. If your project relies on the main field to specify an entry point or default module, please update it accordingly to reflect the correct file path or module name. This change ensures that the correct file is used as the main module when consuming the package. Failure to update this configuration may result in issues with module resolution and may cause unexpected behavior in your project.

# [4.0.0](https://github.com/ansulagrawal/react-big-schedule/compare/3.0.2...4.0.0) (2023-06-17)

### Bug Fixes

- Fix the configration issue 
- Remove unnecessary package dependencies
- Remove build from github

### Major Changes

- Shifted from Vite to Webpack for stable release
- Made a stable import for all formats

### BREAKING CHANGES

- Fix the configration.
- Removed unwanted Packages i.e. Vite, moment.
- Added Package dayjs
- Moved from vite to webpack for stable release
- Fix the configration.
- Removed unwanted Files.
- Moved from vite to webpack

# [3.0.2](https://github.com/ansulagrawal/react-big-schedule/compare/3.0.1...3.0.2) (2023-06-11)

### New Feature:

- Added support for importing the React Big Schedule library in the umd.js format.

### Hotfix:

- Fixed an issue with importing the React Big Schedule library into the project.
- Fixed an issue with importing the locale for antd and dayjs.

Note:

- With this release, users can now import the React Big Schedule library in the umd.js format, providing more flexibility and compatibility with different project setups.
- Please ensure to update your projects to this version to take advantage of the new feature and the fixed import issues.

# [3.0.1](https://github.com/ansulagrawal/react-big-schedule/compare/3.0.0...3.0.1) (2023-06-04)

### HotFix

- Fixed exporting of CSS file in the build process to ensure proper functionality.

### Configuration Changes

- Removed publishing on GitHub as npm is already available for distribution.

### Breaking Changes

None.

Note: Please note that this release includes a hotfix for the CSS file export issue and configuration changes related to publishing on GitHub. No breaking changes have been introduced in this release.

# [3.0.0](https://github.com/ansulagrawal/react-big-schedule/compare/2.0.0...3.0.0) (2023-06-04)

### Features:

- Removed usage of `UNSAFE_componentWillReceiveProps`.
- Fixed event span for day `viewType`.
- Added generics to Scheduler and `SchedulerProps` to extend the `EventItem` type.
- Added option to hide resource view.
- Added option to change event item popover placement.
- Fixed custom view event span.
- Fixed scheduler header span for day view.
- Improved locale support.
- Added options to place the event item popover at the mouse position using `eventItemPopoverPlacement`: `topLeftMousePosition`, `bottomLeftMousePosition`, `topRightMousePosition`, `bottomRightMousePosition`.
- Shifted from moment to dayjs library.

### Breaking Changes:

- Removed usage of `UNSAFE_componentWillReceiveProps`. Update your code to use alternative lifecycle methods or hooks as necessary.
- Event span for day `viewType` has been fixed. Review your code if you were relying on the previous behaviour.
- If you were extending the `Scheduler` component or using `SchedulerProps`, update your code to include generics for `EventItem` type.
- If you were relying on the previous behaviour of resource view visibility, update your code to use the new option to hide it.
- If you were customizing the event item popover placement, update your code to use the new option to change the placement.
- Custom view event span and scheduler header span for day view have been fixed. Check your code if you were affected by these issues.
- If you were relying on the previous behaviour of the `moment` library, note that the shift to `dayjs` may require adjustments to your code.

Thanks to [@hbatalhaStch](https://github.com/hbatalhaStch) for suggesting improvements.

# [2.0.0](https://github.com/ansulagrawal/react-big-schedule/compare/1.0.0...2.0.0) (2023-05-27)

### Features

- Add configurable colour visibility and optional date display in popover. https://github.com/ansulagrawal/react-big-schedule/pull/16

- Add configurable cell size options for Week, Month, and Year views. https://github.com/ansulagrawal/react-big-schedule/pull/17

- Add SWAP event function for event swapping in library. https://github.com/ansulagrawal/react-big-schedule/pull/18

- Enhance library with wrapper function and streamlined dependencies. https://github.com/ansulagrawal/react-big-schedule/pull/19
- Fix bugs and enhancement of format. https://github.com/ansulagrawal/react-big-schedule/pull/20

### BREAKING CHANGES

- Added a configuration option to show or hide colour in the popover.
- Made the date in the popover optional. If the `eventItemPopoverDateFormat` is empty, the date will be hidden.
- Added new configuration options to set the cell size for the Week, Month, and Year views.
- Fixed a bug that caused the hour to double when there was a time change.
- Updated the component to allow hours to be displayed over two days if necessary.
- Added a new feature: `SWAP Event` function for event swapping in the library.
- Enhances the library's capabilities by providing greater flexibility for managing and reordering events.
- Backward compatible with existing codebases, ensuring seamless adoption.
- Added a wrapper function to simplify usage and provide a default export.
- Removed the dependency on the `withDndContext` function.
- Streamlined dependencies, eliminating the need for users to install both `react-dnd-html5-backend` and `react-dnd` separately.

# 1.0.0 (2023-05-21)

### Features

- Updated Package Versions

### BREAKING CHANGES

- Updated Node Version from 14 -> 18
- Updated Ant Design Version 3.16.6 -> 5.0.1
- Updated React DND Version 7.5.0 -> 14.0.5
- Updated react-dnd-html5-backend version 7.5.0 -> 14.1.0
- Updated React version 16 -> 18
- Updated rrule version 2.6.0 -> 2.7.2
- Change Configure from webpack to Vite
