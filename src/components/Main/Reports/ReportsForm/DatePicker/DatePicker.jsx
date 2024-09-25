import { useContext } from "react";
import { $DatePicker } from "./DatePicker.styles.jsx";
import { ReportsContext } from "../../../../../store/reports-context.jsx";

export default function DatePicker({ dateType }) {

  const { period, setPeriod } = useContext(ReportsContext);

  function setPeriodHandler(event) {
    let updatedPeriod;
    if (dateType === "start") {
        updatedPeriod = { ...period, start: event.target.value };
      } else if (dateType === "end") {
        updatedPeriod = { ...period, end: event.target.value };
      }
      setPeriod(updatedPeriod);
  }

  return <$DatePicker type="month" lang="en" onChange={(event) => setPeriodHandler(event)}/>;
}
