import { styled } from "styled-components";
import { appgreen, appblack, appblue } from "../../../../utils/colors.styles.jsx"

function colorHandler(submenu) {
  switch (submenu) {
    case "Country":
    case "Location":
    case "Office":
    case "Area":
    case "Company":
    case "Tribe":
    case "Team":
    case "Employee":
    case "Role":
      return appgreen;
    case "Threshold":
    case "Filter":
      return appblack;
    case "Workstation":
    case "Producer":
    case "System":
    case "Vendor":
    case "Processor":
    case "Memory":
    case "Manufacturer":
      return appblue;
  }
}

export const $Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 0px 0px;
  color: ${({$color}) => colorHandler($color)};
`

export const $Icon = styled.div`
  margin-right: 10px;
  font-size: 34px;
`