import { useContext, useState, useRef } from "react";
import { ReportsContext } from "../../../../store/reports-context.jsx";
import {
  IoCreateOutline,
  IoEarthOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Button from "./Button/Button.jsx";
import Label from "./Label/Label.jsx";
import Select from "./Select/Select.jsx";
import DatePicker from "./DatePicker/DatePicker.jsx";
import $ReportsForm, { $ErrorLabel, $Icon } from "./ReportsForm.styles.jsx";
import { apiCallToGetCalculatedIndicators } from "../../../../api/Api.jsx";

export default function ReportsForm() {
  const [error, setError] = useState(null);

  const timer = useRef();

  const { currentIndicator, period, isOpen, setIsOpen, countries } =
    useContext(ReportsContext);

  const moment = require("moment");

  function getFirstDayOfMonth(yearMonth) {
    const date = moment(yearMonth, "YYYY-MM").startOf("month");
    const formattedDate = date.format("DD-MM-YYYY 00:00:00");
    return formattedDate;
  }

  function getLastDayOfMonth(yearMonth) {
    const date = moment(yearMonth, "YYYY-MM").endOf("month");
    const formattedDate = date.format("DD-MM-YYYY 23:59:59");
    return formattedDate;
  }

  async function fetchCalculatedReports(event) {
    event.preventDefault();

    if (generateButtonEnabledHandler()) {
      const selectedCountryIds = countries
        .filter((country) => country.selected)
        .map((country) => country.id);

      await apiCallToGetCalculatedIndicators(
        currentIndicator,
        getFirstDayOfMonth(period.start),
        getLastDayOfMonth(period.end),
        selectedCountryIds
      )
        .then((resData) => console.log(JSON.stringify(resData)))
        .catch((error) => console.log(error));
    }
  }

  function generateButtonEnabledHandler() {
    if (currentIndicator === "") {
      return false;
    }

    if (!countries.some((country) => country.selected)) {
      return false;
    }

    if (period.start === undefined || period.end === undefined) {
      return false;
    }

    const start = moment(period.start, "YYYY-MM");
    const end = moment(period.end, "YYYY-MM");

    if (start.isAfter(end)) {
      return false;
    }

    return true;
  }

  return (
    <$ReportsForm onSubmit={fetchCalculatedReports}>
      <Button
        type="submit"
        name="Generate"
        enabled={generateButtonEnabledHandler()}
      >
        <IoCreateOutline />
      </Button>
      <Select />
      <Label name="for">
        <IoArrowForwardCircleOutline />
      </Label>
      <Button
        type="button"
        name="Countries"
        enabled={true}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoEarthOutline />
      </Button>
      <Label name="between">
        <IoArrowForwardCircleOutline />
      </Label>
      <DatePicker dateType="start" />
      <Label name="and">
        <IoArrowForwardCircleOutline />
      </Label>
      <DatePicker dateType="end" />
    </$ReportsForm>
  );
}
