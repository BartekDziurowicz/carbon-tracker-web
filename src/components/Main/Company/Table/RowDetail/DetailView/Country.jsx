import { memo, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { PiTreeStructureFill, PiTreeStructureLight } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import {
  $RowButton,
  $RowDetailsHeader,
  $RowDetailsBox,
  $RowInputField,
  $RowInputLabel,
  $RowForm,
  $RowStatusLabel,
} from "../RowDetail.styles";
import Childs from "../Childs/Childs.jsx";
import Parents from "../Parents/Parents.jsx";
import {
  apiCallToUpdateEntity,
  apiCallToDeleteEntity,
} from "../../../../../../api/Api.jsx";

const FIELDS = [{ name: "id" }, { name: "name" }];

const Country = memo(function Country({
  entity,
  entityName,
  updateRowHandler,
  rowIndex,
}) {
  const [response, setResponse] = useState(null);
  const [showParents, setShowParents] = useState(false);
  const [showChilds, setShowChilds] = useState(false);

  const parents = useRef({});

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const disabledElements = form.querySelectorAll(":disabled");
    disabledElements.forEach((element) => (element.disabled = false));

    const fd = new FormData(form);

    const action = form.querySelector(
      'button[type="submit"][name="action"]:focus'
    ).value;

    form.querySelectorAll("input").forEach((element) => {
      if (!element.value && element.placeholder) {
        fd.set(element.name, element.placeholder);
      }
    });

    const formData = Object.fromEntries(fd.entries());

    disabledElements.forEach((element) => (element.disabled = true));

    let resData;

    try {
      if (action === "save") {
        resData = await apiCallToUpdateEntity(
          entityName.toLowerCase(),
          formData
        );
        updateRowHandler(rowIndex, formData);
      } else {
        resData = await apiCallToDeleteEntity(
          entityName.toLowerCase(),
          fd.get("id"),
          fd.get("name")
        );
      }
    } catch (error) {
      resData = error;
    }

    setResponse((_prevResponse) => resData);

    setTimeout(() => {
      setResponse(null);
    }, 5000);
  }

  function showParentHandler() {
    parents.current = entity;
    setShowParents((_prevState) => !_prevState);
  }

  return (
    <$RowForm onSubmit={handleSubmit}>
      <$RowDetailsHeader>
        <$RowDetailsBox $justify="center" $gap="10px">
          <$RowInputLabel>{FIELDS[0].name}</$RowInputLabel>
          <$RowInputField
            name={FIELDS[0].name}
            $width="15%"
            $align="center"
            disabled
            placeholder={entity[FIELDS[0].name]}
          ></$RowInputField>
        </$RowDetailsBox>
        <$RowDetailsBox $justify="center" $gap="10px">
          <$RowInputLabel>{FIELDS[1].name}</$RowInputLabel>
          <$RowInputField
            name={FIELDS[1].name}
            $width="50%"
            $align="center"
            placeholder={entity[FIELDS[1].name]}
            $color={entityName}
          ></$RowInputField>
        </$RowDetailsBox>
        <$RowDetailsBox $justify="flex-end" $gap="0px">
          <$RowButton
            type="submit"
            name="action"
            value="save"
            $color={entityName}
            $size="16px"
          >
            <a
              data-tooltip-id={"save"}
              data-tooltip-content={"Save"}
              data-tooltip-delay-show={1000}
              data-tooltip-place={"top"}
            >
              <FaSave />
              <Tooltip id={"save"} />
            </a>
          </$RowButton>
          <$RowButton
            type="submit"
            name="action"
            value="delete"
            $color="delete"
            $size="13px"
          >
            <a
              data-tooltip-id={"delete"}
              data-tooltip-content={"Delete"}
              data-tooltip-delay-show={1000}
              data-tooltip-place={"top"}
            >
              <FaTrashCan />
              <Tooltip id={"delete"} />
            </a>
          </$RowButton>
          <$RowButton
            type="button"
            $color={entityName}
            $size="16px"
            onClick={showParentHandler}
          >
            <a
              data-tooltip-id={"parents"}
              data-tooltip-content={"Parents"}
              data-tooltip-delay-show={1000}
              data-tooltip-place={"top"}
            >
              <PiTreeStructureFill />
              <Tooltip id={"parents"} />
            </a>
          </$RowButton>
          <$RowButton
            type="button"
            $color={entityName}
            $size="16px"
            onClick={() => setShowChilds((_prevState) => !_prevState)}
          >
            <a
              data-tooltip-id={"childs"}
              data-tooltip-content={"Childs"}
              data-tooltip-delay-show={1000}
              data-tooltip-place={"top"}
            >
              <PiTreeStructureLight />
              <Tooltip id={"childs"} />
            </a>
          </$RowButton>
        </$RowDetailsBox>
      </$RowDetailsHeader>
      {response === null ? (
        ""
      ) : response.message === undefined ? (
        <$RowStatusLabel $color="ok">{response}</$RowStatusLabel>
      ) : (
        <$RowStatusLabel $color="error">{response.message}</$RowStatusLabel>
      )}
      {showParents && <Parents ref={parents} />}
      {showChilds && (
        <Childs
          objId={entity[FIELDS[0].name]}
          objName={entity[FIELDS[1].name]}
          entityName={entityName}
        >
          <PiTreeStructureLight />
        </Childs>
      )}
    </$RowForm>
  );
});

export default Country;
