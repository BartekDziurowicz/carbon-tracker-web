import { useContext, useState, useRef } from "react";
import { ReportsContext } from "../../../../store/reports-context.jsx";
import {
  IoCreateOutline,
  IoAddCircleOutline,
  IoArrowForwardCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import Button from "./Button/Button.jsx";
import Label from "./Label/Label.jsx";
import SelectIndicator from "./Select/SelectIndicator.jsx";
import $ReportsForm, { $ErrorLabel } from "./ReportsForm.styles.jsx";

export default function ReportsForm() {
  const [error, setError] = useState(null);

  const timer = useRef();

  const { currentIndicator, setCurrentIndicator, indicators } =
    useContext(ReportsContext);

  async function fetchCalculatedReports(event) {
    event.preventDefault();
    console.log(JSON.stringify(indicators));
  }

  return (
    <$ReportsForm onSubmit={fetchCalculatedReports}>
      <Button type="submit" name="Generate" enabled={currentIndicator !== ""}>
        <IoCreateOutline />
      </Button>
      <SelectIndicator />
      <Label name="for">
          <IoArrowForwardCircleOutline />
      </Label>
    </$ReportsForm>
  );
}
