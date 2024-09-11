import { memo, useContext, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { PiTreeStructureFill, PiTreeStructureLight } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import {
  $RowButton,
  $RowDetailsHeader,
  $RowDetailsBox,
  $RowForm,
  $RowStatusLabel,
} from "../RowDetail.styles.jsx";
import Childs from "../Childs/Childs.jsx";
import Parents from "../Parents/Parents.jsx";
import {
  determineUniqueFieldName,
  entityMappingHandler,
  determinateChildsHandler,
  determinateRelatedEntitiesHandler,
} from "./DetailView.utils.js";
import { CompanyContext } from "../../../../../../store/company-context.jsx";
import {
  apiCallToCreateEntity,
  apiCallToUpdateEntity,
  apiCallToDeleteEntity,
} from "../../../../../../api/Api.jsx";

const DetailView = memo(function DetailView({
  entity,
  entityName,
  updateRowHandler,
  deleteRowHandler,
  rowIndex,
}) {
  const [response, setResponse] = useState(null);
  const [showParents, setShowParents] = useState(false);
  const [showChilds, setShowChilds] = useState(false);
  const { parents } = useContext(CompanyContext);

  const timer = useRef();

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
    const updatedEntity = { ...formData, ...parents };

    disabledElements.forEach((element) => (element.disabled = true));

    let resData;

    try {
      if (action === "save") {
        if (entity.id === 0) {
          updatedEntity.id = null;
          resData = await apiCallToCreateEntity(
            entityName.toLowerCase(),
            updatedEntity
          )
            .then((resData) => {
              formData.id = resData.split(":")[1];
              updateRowHandler(0, formData);
              return resData.split(":")[0];
            });
        } else {
          resData = await apiCallToUpdateEntity(
            entityName.toLowerCase(),
            updatedEntity
          ).then(updateRowHandler(rowIndex, formData));
        }
      } else {
        if (entity.id === 0) {
          resData="Canceled"
        } else {
          resData = await apiCallToDeleteEntity(
            entityName.toLowerCase(),
            updatedEntity
          );
        }
      }
    } catch (error) {
      resData = error;
    }

    setResponse((_prevResponse) => resData);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setResponse(null);
      if (action === "delete" && !(resData instanceof Error)) {
        const id = entity.id === 0 ? 0 : fd.get("id");
        deleteRowHandler(id);
      }
    }, 3000);
  }

  function showParentHandler() {
    setShowParents((_prevState) => !_prevState);
  }

  const mappedObject = entityMappingHandler(entity, entityName);

  return (
    <$RowForm onSubmit={handleSubmit}>
      <$RowDetailsHeader>
        {Object.values(mappedObject)}

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
          {determinateRelatedEntitiesHandler(entityName) && (
            <>
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
            </>
          )}
        </$RowDetailsBox>
      </$RowDetailsHeader>
      {response === null ? (
        ""
      ) : response.message === undefined ? (
        <$RowStatusLabel $color="ok">{response}</$RowStatusLabel>
      ) : (
        <$RowStatusLabel $color="error">{response.message}</$RowStatusLabel>
      )}
      {showParents && <Parents entityName={entityName} entity={entity} />}
      {showChilds &&
        determinateChildsHandler(entityName).map((name, index) => (
          <Childs
            key={index}
            objId={entity.id}
            objName={entity[determineUniqueFieldName(entityName.toLowerCase())]}
            entityName={entityName}
            call={index}
            childEntities={determinateChildsHandler(entityName)}
          >
            <PiTreeStructureLight />
            {name}
          </Childs>
        ))}
    </$RowForm>
  );
});

export default DetailView;
