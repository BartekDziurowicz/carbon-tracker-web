import { $RowDetailsBox, $RowInputField } from "../RowDetail.styles";

function determinateFieldType(field) {
  const numberFields = [
    "apartmentNumber",
    "capacity",
    "carbonLimit",
    "clock",
    "cores",
    "streetNumber",
    "tdp",
    "threads",
    "threshold",
    "voltage",
  ];

  if (numberFields.includes(field)) {
    return "number";
  }

  return "text";
}

function determinateFieldDisabled(field, entityName) {
  if (field === "id") {
    return true;
  }
  if (entityName === "Filter" && field === "name") {
    return true;
  }
  if (entityName === "Threshold" && field === "name") {
    return true;
  }
  return false;
}

export function entityMappingHandler(entity, entityName) {
  return Object.keys(entity).reduce((acc, key) => {
    if (typeof entity[key] !== "object" || entity[key] === null) {
      acc[key] = <div>{entity[key]}</div>;

      acc[key] = (
        <$RowDetailsBox $justify="center" $gap="0px">
          <$RowInputField
            name={key}
            $align="center"
            disabled={determinateFieldDisabled(key, entityName)}
            placeholder={entity[key]}
            $color={determinateFieldDisabled(key, entityName) ? "" : entityName}
            type={determinateFieldType(key)}
          ></$RowInputField>
        </$RowDetailsBox>
      );
    }
    return acc;
  }, {});
}
