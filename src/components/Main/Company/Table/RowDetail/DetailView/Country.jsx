import {
  $RowButton,
  $RowDetailsHeader,
  $RowDetailsBox,
  $RowInputField,
  $RowInputLabel,
  $RowForm,
} from "../RowDetail.styles";
import { apiCallToUpdateEntity } from "../../../../../../api/Api.jsx";

const FIELDS = [{ name: "id" }, { name: "name" }];

export default function Country({ entity, entityName, updateRowHandler, rowIndex }) {

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const disabledElements = form.querySelectorAll(":disabled");
    disabledElements.forEach((element) => (element.disabled = false));

    const fd = new FormData(form);

    form.querySelectorAll("input").forEach((element) => {
      if (!element.value && element.placeholder) {
        fd.set(element.name, element.placeholder);
      }
    });

    const formData = Object.fromEntries(fd.entries());

    disabledElements.forEach((element) => (element.disabled = true));

    const resData = apiCallToUpdateEntity(entityName.toLowerCase(), formData);
    // TODO res Data await i pokazac respone w jakiejs labelce
    updateRowHandler(rowIndex, formData);
  }

  return (
    <$RowForm onSubmit={handleSubmit}>
      <$RowDetailsHeader>
        <$RowDetailsBox $justify="center">
          <$RowInputLabel>{FIELDS[0].name}</$RowInputLabel>
          <$RowInputField
            name={FIELDS[0].name}
            $width="15%"
            $align="center"
            disabled
            placeholder={entity[FIELDS[0].name]}
          ></$RowInputField>
        </$RowDetailsBox>
        <$RowDetailsBox $justify="center">
          <$RowInputLabel>{FIELDS[1].name}</$RowInputLabel>
          <$RowInputField
            name={FIELDS[1].name}
            $width="50%"
            $align="center"
            placeholder={entity[FIELDS[1].name]}
            $color={entityName}
          ></$RowInputField>
        </$RowDetailsBox>
        <$RowDetailsBox $justify="flex-end">
          <$RowButton
            type="submit"
            $color={entityName}
          >
            Save
          </$RowButton>
          <$RowButton $color="delete">Delete</$RowButton>
        </$RowDetailsBox>
      </$RowDetailsHeader>
    </$RowForm>
  );
}
