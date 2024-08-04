import { useContext } from "react";
import { SelectorContext } from "../../../../store/selector-context.jsx";
import {
  IoSearch,
  IoAddCircleOutline,
  IoArrowForwardCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import Button from "./Button/Button.jsx";
import Label from "./Label/Label.jsx";
import SelectKey from "./Select/SelectKey.jsx";
import SelectValue from "./Select/SelectValue.jsx";
import { apiCallToGetCalculatedMetrics } from "../../../../api/Api.jsx";
import $SelectorForm from "./SelectorForm.styles.jsx";

export default function SelectorForm() {
  const {
    showCriteria,
    setShowCriteria,
    tempWhereCriteria,
    setTempWhereCriteria,
    whereCriteria,
    setWhereCriteria,
    calculatedMetrics,
    setCalculatedMetrics
  } = useContext(SelectorContext);

  function handleShowCriteriaChange(event) {
    setShowCriteria(event.target.value);
  }

  function handleWhereCriteriaChange(event) {
    setTempWhereCriteria({ key: event.target.value, value: "", id: "" });
  }

  async function fetchCalculatedMetrics(event) {
    event.preventDefault();

    const whereCriteriaMap = whereCriteria.reduce((accumulator, criteria) => {
      accumulator[criteria.key] = criteria.id;
      return accumulator;
    }, {});

    try {
      await apiCallToGetCalculatedMetrics(showCriteria, whereCriteriaMap).then(resData => {
        setCalculatedMetrics(resData);
      });
    } catch (error) {
      console.log(error);
      //TODO
    }
  }

  function setWhereCriteriaHandler() {
    setWhereCriteria(tempWhereCriteria);
  }

  return (
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
        enabled={tempWhereCriteria.key !== "" && tempWhereCriteria.value !== ""}
        onClick={setWhereCriteriaHandler}
      >
        <IoAddCircleOutline />
      </Button>
    </$SelectorForm>
  );
}
