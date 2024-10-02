import { useContext } from "react";
import { $DatePicker } from "./DatePicker.styles.jsx";
import { SelectorContext } from "../../../../../store/selector-context.jsx";

export default function DatePicker({ dateType }) {
  const moment = require("moment");

  const { setPeriod } = useContext(SelectorContext);

  function setPeriodHandler(event) {
    const formattedDate = moment(event.target.value).format(
      "DD-MM-YYYY HH:mm:ss"
    );
    if (dateType === "start") {
      setPeriod({ start: formattedDate });
    } else {
      setPeriod({ end: formattedDate });
    }
  }

  return (
    <$DatePicker
      type="datetime-local"
      lang="en"
      onChange={(event) => setPeriodHandler(event)}
    />
  );
}
