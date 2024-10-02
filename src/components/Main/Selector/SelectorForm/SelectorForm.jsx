import { useContext, useState, useRef } from "react";
import { SelectorContext } from "../../../../store/selector-context.jsx";
import {
  IoSearch,
  IoAddCircleOutline,
  IoArrowForwardCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { CiClock1, CiClock2, CiTimer } from "react-icons/ci";
import Button from "./Button/Button.jsx";
import Label from "./Label/Label.jsx";
import SelectKey from "./Select/SelectKey.jsx";
import SelectValue from "./Select/SelectValue.jsx";
import SelectInterval from "./Select/SelectInterval.jsx";
import DatePicker from "./DatePicker/DatePicker.jsx";
import { apiCallToGetCalculatedMetrics } from "../../../../api/Api.jsx";
import $SelectorForm, { $ErrorLabel } from "./SelectorForm.styles.jsx";

export default function SelectorForm() {
  const [error, setError] = useState(null);

  const timer = useRef();
  const {
    showCriteria,
    setShowCriteria,
    tempWhereCriteria,
    setTempWhereCriteria,
    whereCriteria,
    setWhereCriteria,
    setCalculatedMetrics,
    setPeriod,
    period
  } = useContext(SelectorContext);

  function handleShowCriteriaChange(event) {
    setShowCriteria(event.target.value);
  }

  function handleWhereCriteriaChange(event) {
    setTempWhereCriteria({ key: event.target.value, value: "", id: "" });
  }

  function handlePeriodIntervalChange(event) {
    setPeriod({interval: event.target.value});
  }

  async function fetchCalculatedMetrics(event) {
    event.preventDefault();

    const whereCriteriaMap = whereCriteria.reduce((accumulator, criteria) => {
      accumulator[criteria.key] = criteria.id;
      return accumulator;
    }, {});

    const moment = require("moment");
    const date = new Date();
    const startDate = moment().startOf("month").format("DD-MM-YYYY HH:mm:ss");
    const endDate = moment(date).format("DD-MM-YYYY HH:mm:ss");
    const period = 900;

    await apiCallToGetCalculatedMetrics(
      showCriteria,
      startDate,
      endDate,
      period,
      whereCriteriaMap
    )
      .then((resData) => {
        setCalculatedMetrics(resData);
      })
      .catch((error) => {
        setError(error.message);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          setError(null);
        }, 3000);
      });
  }

  function setWhereCriteriaHandler() {
    setWhereCriteria(tempWhereCriteria);
  }

  return (
    <>
      <$SelectorForm onSubmit={fetchCalculatedMetrics}>
        <Button type="submit" name="Show" enabled={showCriteria !== ""}>
          <IoSearch />
        </Button>
        <SelectKey onChange={handleShowCriteriaChange} />
        <Label name="where">
          <IoArrowForwardCircleOutline />
        </Label>
        <SelectKey onChange={handleWhereCriteriaChange} />
        <Label name="is">
          <IoCheckmarkCircleOutline />
        </Label>
        <SelectValue />
        <Button
          type="button"
          name="Add"
          enabled={
            tempWhereCriteria.key !== "" && tempWhereCriteria.value !== ""
          }
          onClick={setWhereCriteriaHandler}
        >
          <IoAddCircleOutline />
        </Button>
        <div style={{ flexBasis: '100%' }}></div>
        <Label name="between">
          <CiClock1 />
        </Label>
        <DatePicker dateType="start"/>
        <Label name="and">
          <CiClock2 />
        </Label>
        <DatePicker dateType="end"/>
        <Label name="interval">
          <CiTimer />
        </Label>
        <SelectInterval onChange={handlePeriodIntervalChange}/>
      </$SelectorForm>
      {error !== null ? <$ErrorLabel>{error}</$ErrorLabel> : null}
    </>
  );
}
