import { memo, useContext, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { ClipLoader } from "react-spinners";
import { PiTreeStructureFill, PiTreeStructureLight } from "react-icons/pi";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import {
  $RowDetailsHeader,
  $RowStatusLabel,
  $RowForm,
  $RowButton,
  $RowDetailsBox,
} from "./DetailView.styles.jsx";
import Childs from "../Childs/Childs.jsx";
import Parents from "../Parents/Parents.jsx";
import {
  determineUniqueFieldName,
  entityMappingHandler,
  determinateChildsHandler,
} from "./DetailView.utils.js";
import { determinateRestrictedEntitiesHandler, colorHandler } from "../../Table.utils.js";
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
  const [loading, setLoading] = useState(false);
  const { parents } = useContext(CompanyContext);

  const timer = useRef();
  const enabledRef = useRef(entity.enabled);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

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

    if (entityName === "Filter") {
      formData.enabled = formData.enabled === "0" ? false : true;
      enabledRef.current = formData.enabled === "0" ? false : true;
    }

    const updatedEntity = { ...formData, ...parents };

    disabledElements.forEach((element) => (element.disabled = true));

    let resData;

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
          })
          .catch((error) => error);
      } else {
        resData = await apiCallToUpdateEntity(
          entityName.toLowerCase(),
          updatedEntity
        )
          .then((resData) => {
            updateRowHandler(rowIndex, formData);
            return resData;
          })
          .catch((error) => {
            console.log(error);
            return error;
          });
      }
    } else {
      if (entity.id === 0) {
        resData = "Canceled";
      } else {
        resData = await apiCallToDeleteEntity(
          entityName.toLowerCase(),
          updatedEntity
        ).catch((error) => error);
      }
    }

    setResponse((_prevResponse) => resData);
    setLoading(false);

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

  return (
    <$RowForm onSubmit={handleSubmit}>
      <$RowDetailsHeader>
        {Object.values(entityMappingHandler(entity, entityName))}

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
            type={
              determinateRestrictedEntitiesHandler(entityName)
                ? "submit"
                : "button"
            }
            name="action"
            value="delete"
            $color={
              determinateRestrictedEntitiesHandler(entityName) ? "delete" : ""
            }
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
            $color={
              determinateRestrictedEntitiesHandler(entityName) ? entityName : ""
            }
            $size="16px"
            onClick={
              determinateRestrictedEntitiesHandler(entityName)
                ? showParentHandler
                : () => {}
            }
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
            $color={
              determinateRestrictedEntitiesHandler(entityName) ? entityName : ""
            }
            $size="16px"
            onClick={
              determinateRestrictedEntitiesHandler(entityName)
                ? () => setShowChilds((_prevState) => !_prevState)
                : () => {}
            }
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
      <ClipLoader
        color={colorHandler(entityName)}
        loading={loading}
        size={15}
        speedMultiplier={0.75}
        aria-label="Loading Spinner"
      />
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
