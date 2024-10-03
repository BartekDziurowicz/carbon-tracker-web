0.33 (2024-10-??)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/23)
* Fixed decimal to fixed 9 in selector line charts
* Fixed errors handling on create entity
* Create tooltips for reports headers
* Fix margin between reports menu and content
* Add error handling for parents component in organization menu

0.32 (2024-10-02)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/22)
* Extend selector context by period object
* Implement new components and functions to handle period values
* Create period nad dates handling in selector tab
* Fixed decimal to fixed 9 in selectro line charts (was not commited)

0.31 (2024-10-01)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/21)
* Add info label for reports and selector when data are not fetched
* Change Selector LineCharts font sizes
* Change employee charts font sizes
* Change reports date picker hight
* Add selected nav item to session storage
* Implement Brush component form ReCharts to selector LineCharts
* Restore VMenu colors in Company tab
* Fix infinity spinner for "no child relations"
* Add different icons for "between" and "and" labels in reports tab

0.30 (2024-09-30)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/20)
* Develop document component ui
* Create reports table UI and logic
* Develop linecharts, areacharts, piecharts and logic to manipulate charts data 
* Create charts for kgco2e summary

0.29 (2024-09-25)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/19)
* Create reports ctx
* Create logic to handle new indicator endpoint
* Develop reports component with select, label and button sub-components
* Implement new api call to retrieve calculated indicators
* Extend reports context by calculatedIndicators and setCalculatedIndicators
* Implement logic for generate button

0.28 (2024-09-17)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/18)
* Use defer hook for menu items together with Await and Suspense
* Create errorElements for not exisitng page and route error
* Implement error label and spinners for metrics, selector and organization tab

0.27 (2024-09-15)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/17)
* Fixed width of table component
* Fixed column names by splitting names
* New created row is auto expanded
* Disabling and enabling create button
* Improve table rows styling by changing font sizes
* Enabling / disabling rows management functions and create button for proper vmenu items
* Label instead div for table cells
* Checkboxes in Filter vmenu item
* Input type range in filter details to eanble / disable filter
* Add spinners and error handling to organization tab

0.26 (2024-09-11)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/16)
* Refactor table to have separate header and rows state
* Implement api call to retrieve entity schema for headers
* Create and implement logic for new entity creation

0.25 (2024-09-09)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/15)
* Develop parent visibility for entities
* Extend company context by parents objects
* Implement and delete and update entities
* Fix timeout by using usRef hook

0.24 (2024-09-04)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/14)
* Create VMenu and Title in Company section with proper styling
* Create generic endpoint for retrieve entities for manage
* Create and implement tansack table to view entities
* Implement sorting and pinning in table
* Develop details with icons menu
* Add functionality to save, delete (company only) and childs buttons
* Create childs view and info / error label

0.23 (2024-08-05)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/13)
* Extend metrics api call by mandatory parameters
* Adjust line charts logic to handle generic groups and colors

0.22 (2024-08-04)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/12)
* Create filters section and logic
* Extend selector context by deleting filters
* Implement id in filter value object
* Create new api call to get calculated metrics and implement it into proper button
* Implement charts for selector and proper functions to calculate usage and footprint

0.21 (2024-07-27)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/11)
* Install react-router-dom and implement router
* Add Metrics and Selector nav items routing
* Add loaders for Metrics and Selector routes
* Create and implement context and reducer for selector
* Implement new api call for filters and response handler
* Create selector form

0.20 (2024-06-25)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/10)
* Align endpoints and api calls with backend
* Change Employee, Office and Workstation components to handle api call
* Move destructuring to proper components

0.19 (2024-06-09)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/9)
* Optimialization using memo, useMemo and useCallback
* Create and implement api call for carbon thresholds
* Create and implement api call for companies
* Create and implement api call for areas
* Create and implement api call for tribes
* Create and implement api call for teams
* Create and implement api call for employees

0.18 (2024-05-21)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/8)
* Add clickable stepper and implement functionality for previosus steps
* Value for step is set from session storage, page can be refreshed
* Create and implemente breadcrumb for stepper

0.17 (2024-05-21)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/7)
* Create carbon footprint column in employee info
* Create current footprint bar chart in employee info
* Create footprint by component pie chart in employee info

0.16 (2024-05-18)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/6)
* Simplify data from server, all objects are not needed
* Change object info to carbon sumamry with new style and tooltip
* Add constants to handle threshold value and carbon usage value
* Create mocked api calls 
* Develop and style all employee info components include office info and workstation

0.15 (2024-05-15)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/5)
* Refactor application and make metrics stepper items generic

0.14 (2024-05-10)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/4)
* Refactor company item style by creting separate components and function
* Add tooltips to company component
* Implement functionality to switch between steps and rerender data
* Create and style area items

0.13 (2024-05-10)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/3)
* Create metrics stepper
* Add application colors to separate jsx file
* Create and style company items
* Create metrics-context and implement it to proper components

0.12 (2024-05-04)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/2)
* Implement styled-components instead .css files
* Add tooltips for navigation menu items
* Create and implement Navigation context
* Add selected menu info to navigation

0.11 (2024-05-02)
===============
* [@BartoszDziurowicz](https://github.com/BartekDziurowicz/carbon-tracker-web/pull/1)
* Init application using npx create-react-app
* Create Banner and Logo components
* Create Naviagation component with navigation items including icons

0.1 (2024-04-28)
===============
* Create new empty repository - [@BartoszDziurowicz](https://github.com/BartekDziurowicz)