# [2.0.0](https://github.com/ansulagrawal/react-big-schedule/compare/1.0.0...2.0.0) (2023-05-27)


### Features

* Add configurable colour visibility and optional date display in popover. https://github.com/ansulagrawal/react-big-schedule/pull/16

* Add configurable cell size options for Week, Month, and Year views. https://github.com/ansulagrawal/react-big-schedule/pull/17

* Add SWAP event function for event swapping in library. https://github.com/ansulagrawal/react-big-schedule/pull/18

* Enhance library with wrapper function and streamlined dependencies. https://github.com/ansulagrawal/react-big-schedule/pull/19
* Fix bugs and enhancement of format. https://github.com/ansulagrawal/react-big-schedule/pull/20

### BREAKING CHANGES

*  Added a configuration option to show or hide colour in the popover.
* Made the date in the popover optional. If the `eventItemPopoverDateFormat` is empty, the date will be hidden.
* Added new configuration options to set the cell size for the Week, Month, and Year views.
* Fixed a bug that caused the hour to double when there was a time change.
* Updated the component to allow hours to be displayed over two days if necessary.
* Added a new feature: `SWAP Event` function for event swapping in the library.
* Enhances the library's capabilities by providing greater flexibility for managing and reordering events. 
* Backward compatible with existing codebases, ensuring seamless adoption.
* Added a wrapper function to simplify usage and provide a default export.
* Removed the dependency on the `withDndContext` function.
* Streamlined dependencies, eliminating the need for users to install both `react-dnd-html5-backend` and `react-dnd` separately.

# 1.0.0 (2023-05-21)


### Features

* Updated Package Versions

### BREAKING CHANGES

* Updated Node Version from 14 -> 18
* Updated Ant Design Version 3.16.6 -> 5.0.1
* Updated React DND Version 7.5.0 -> 14.0.5
* Updated react-dnd-html5-backend version 7.5.0 -> 14.1.0
* Updated React version 16 -> 18
* Updated rrule version 2.6.0 -> 2.7.2
* Change Configure from webpack to Vite
