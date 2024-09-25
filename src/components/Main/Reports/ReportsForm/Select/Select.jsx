import { useContext } from "react";
import { ReportsContext } from "../../../../../store/reports-context.jsx";
import $Select from "./Select.styles.jsx";

export default function Select() {
  const { setCurrentIndicator, indicators } =
    useContext(ReportsContext);

  function setCurrentIndicatorHandler(event) {
    setCurrentIndicator(event.target.value);
  }

  return (
    <$Select defaultValue="default" onChange={setCurrentIndicatorHandler}>
      <option disabled value="default">
        -- select --
      </option>
      {indicators
        .filter((indicator) => indicator.enabled)
        .map((indicator) => (
          <option key={indicator.id}>{indicator.name}</option>
        ))}
    </$Select>
  );
}
