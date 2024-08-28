import {
  $RowButton,
  $RowDetailsHeader,
  $RowDetailsBox,
  $RowInputField,
  $RowInputLabel,
} from "../RowDetail.styles";

const FIELDS = [{ name: "id" }, { name: "name" }];

export default function Country({ entity, entityName }) {
  return (
    <>
      <$RowDetailsHeader>
        <$RowDetailsBox $justify="center">
          <$RowInputLabel>{FIELDS[0].name}</$RowInputLabel>
          <$RowInputField
            $width="15%"
            $align="center"
            disabled
            placeholder={entity[FIELDS[0].name]}
          ></$RowInputField>
        </$RowDetailsBox>
        <$RowDetailsBox $justify="center">
          <$RowInputLabel>{FIELDS[1].name}</$RowInputLabel>
          <$RowInputField
            $width="50%"
            $align="center"
            placeholder={entity[FIELDS[1].name]}
            $color={entityName}
          ></$RowInputField>
        </$RowDetailsBox>
        <$RowDetailsBox $justify="flex-end">
          <$RowButton $color={entityName}>Save</$RowButton>
          <$RowButton $color={entityName}>Delete</$RowButton>
        </$RowDetailsBox>
      </$RowDetailsHeader>
    </>
  );
}
