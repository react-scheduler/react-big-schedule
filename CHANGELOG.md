## [4.2.4](https://github.com/ansulagrawal/react-big-schedule/compare/4.2.3...4.2.4)

`2023-07-13`

- Change HeaderView Component from class based to function based by [@DamyanBG](https://github.com/DamyanBG) in [#73](https://github.com/react-scheduler/react-big-schedule/pull/73)
- Updated library versions by [@dependabot](https://github.com/dependabot)
  - antd : 5.6.3 -> 5.7.0
  - dayjs: 1.11.8 -> 1.11.9
  - rrule: 2.7.1 -> 2.7.2
  - @babel/cli: 7.22.5 -> 7.22..9
  - @babel/core: 7.22.5 -> 7.22.9
  - @babel/preset-env: 7.22.5 -> 7.22.9
  - babel-loader: 9.1.2 -> 9.1.3
  - webpack : 5.88.0 -> 5.88.1
- Converted to an organization by [@ansulagrawal](https://github.com/ansulagrawal)

## [4.2.3](https://github.com/ansulagrawal/react-big-schedule/compare/4.2.2...4.2.3)

`2023-06-28`

- Fixed the `GetPos` import error by @ansulagrawal in [#59](https://github.com/ansulagrawal/react-big-schedule/pull/59)

## [4.2.2](https://github.com/ansulagrawal/react-big-schedule/compare/4.2.1...4.2.2)

`2023-06-27`

- Updated Readme by @ansulagrawal in [#46](https://github.com/ansulagrawal/react-big-schedule/pull/46)
- Chore(deps-dev): Bump webpack from 5.87.0 to 5.88.0 by @dependabot in [#50](https://github.com/ansulagrawal/react-big-schedule/pull/50)
- Chore(deps): Bump antd from 5.6.2 to 5.6.3 by @dependabot in [#51](https://github.com/ansulagrawal/react-big-schedule/pull/51)

#### New Contributors

- @dependabot

## [4.2.1](https://github.com/ansulagrawal/react-big-schedule/compare/4.2.0...4.2.1)

`2023-06-24`

- Updated Antd Version and added `@babel/cli` package [#39](https://github.com/ansulagrawal/react-big-schedule/pull/39) [@ansulagrawal](https://github.com/ansulagrawal)
- Fixes for calculating span and isEnd for events. [#35](https://github.com/ansulagrawal/react-big-schedule/pull/35) [@adam-m-clark](https://github.com/adam-m-clark)

#### New Contributors

- [@adam-m-clark](https://github.com/adam-m-clark)

## [4.2.0](https://github.com/ansulagrawal/react-big-schedule/compare/3.0.2...4.0.0)

`2023-06-17`

- Fix the default export file `index.js`.
- Remove `main.jsx` from the build directory.
- Fix Importing issue in projects as `src/index.js` file was not properly written.
- Added `type-definitions` for the library.
- Fix the locale for both library `antd` and `dayjs`.
- Fix the `package.json` main parameter value.
- Moved from vite to webpack for stable release
- Made a stable import for all formats
- Remove build from github
- Remove unnecessary package dependencies

## [3.0.2](https://github.com/ansulagrawal/react-big-schedule/compare/3.0.1...3.0.2)

`2023-06-11`

- Added support for importing the React Big Schedule library in the umd.js format.
- Fixed an issue with importing the React Big Schedule library into the project.
- Fixed an issue with importing the locale for antd and dayjs.

Note:

- With this release, users can now import the React Big Schedule library in the umd.js format, providing more flexibility and compatibility with different project setups.
- Please ensure to update your projects to this version to take advantage of the new feature and the fixed import issues.

# [3.0.1](https://github.com/ansulagrawal/react-big-schedule/compare/3.0.0...3.0.1)

`2023-06-04`

- Fixed exporting of CSS file in the build process to ensure proper functionality.
- Removed publishing on GitHub as npm is already available for distribution.

# [3.0.0](https://github.com/ansulagrawal/react-big-schedule/compare/2.0.0...3.0.0)

`2023-06-04`

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

Thanks to [@hbatalhaStch](https://github.com/hbatalhaStch), Changes has been copied from his repo and done some minor changes.

#### New Contributors

- [@hbatalhaStch](https://github.com/hbatalhaStch)

# [2.0.0](https://github.com/ansulagrawal/react-big-schedule/compare/1.0.0...2.0.0)

`2023-05-27`

- Add configurable colour visibility and optional date display in popover. [#16](https://github.com/ansulagrawal/react-big-schedule/pull/16)

- Add configurable cell size options for Week, Month, and Year views. [#17](https://github.com/ansulagrawal/react-big-schedule/pull/17)

- Add SWAP event function for event swapping in library. [#18](https://github.com/ansulagrawal/react-big-schedule/pull/18)

- Enhance library with wrapper function and streamlined dependencies. [#19](https://github.com/ansulagrawal/react-big-schedule/pull/19)
- Fix bugs and enhancement of format. [#20](https://github.com/ansulagrawal/react-big-schedule/pull/20)

### Breaking Changes:

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

## 1.0.0

`2023-05-21`

- Updated Node Version from 14 -> 18
- Updated Ant Design Version 3.16.6 -> 5.0.1
- Updated React DND Version 7.5.0 -> 14.0.5
- Updated react-dnd-html5-backend version 7.5.0 -> 14.1.0
- Updated React version 16 -> 18
- Updated rrule version 2.6.0 -> 2.7.2
- Change Configure from webpack to Vite

#### New Contributors

- [@ansulagrawal](https://github.com/ansulagrawal)
