import { $RowInputRange, $RowInputField, $RowDetailsBox } from "./DetailView.styles.jsx";

export function determineUniqueFieldName(entityName) {
  switch (entityName) {
    case "location":
      return "city";
    case "employee":
      return "corporateKey";
    case "system":
      return "family";
    case "memory":
      return "partNumber";
    default:
      return "name";
  }
}

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

  const passwordField = [
    "password"
  ]

  if (numberFields.includes(field)) {
    return "number";
  }

  if (passwordField.includes(field)) {
    return "password";
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
  if (entityName === "Indicator" && field === "name") {
    return true;
  }
  return false;
}

function determinateProperInputRangeField(enabled, key) {
  if (enabled === 'true' || enabled === true) {
    return <$RowInputRange type="range" name={key} min="0" max="1" step="1" defaultValue={1} />
  } else {
    return <label><$RowInputRange type="range" name={key} min="0" max="1" step="1" defaultValue={0} /></label>
  }
}

export function entityMappingHandler(entity, entityName) {
  return Object.keys(entity).reduce((acc, key) => {
    if (typeof entity[key] !== "object" || entity[key] === null) {

      acc[key] = (
        <$RowDetailsBox $justify="center" $gap="0px">
          {key !== "enabled" ? (
            <$RowInputField
              name={key}
              $align="center"
              disabled={determinateFieldDisabled(key, entityName)}
              placeholder={
                entity.id !== 0 && entity[key] === 0
                  ? 0
                  : entity[key]
                  ? entity[key]
                  : key
              }
              $color={
                determinateFieldDisabled(key, entityName) ? "" : entityName
              }
              type={determinateFieldType(key)}
            ></$RowInputField>
          ) : (
            determinateProperInputRangeField(entity.enabled, key)
          )}
        </$RowDetailsBox>
      );
    }
    return acc;
  }, {});
}

export function determinateChildsHandler(entityName) {
  switch (entityName) {
    case "Country":
      return ["Location"];
    case "Location":
      return ["Office", "Company", "Employee"];
    case "Office":
      return ["Employee"];
    case "Company":
      return ["Area"];
    case "Area":
      return ["Tribe"];
    case "Tribe":
      return ["Team"];
    case "Team":
      return ["Employee"];
    case "Employee":
      return [null];
    case "Role":
      return ["Employee"];
    case "Workstation":
      return ["Employee"];
    case "Producer":
      return ["Workstation"];
    case "System":
      return ["Workstation"];
    case "Vendor":
      return ["System"];
    case "Processor":
      return ["Workstation"];
    case "Memory":
      return ["Workstation"];
    case "Manufacturer":
      return ["Processor", "Memory"];
    default:
      return [];
  }
}
