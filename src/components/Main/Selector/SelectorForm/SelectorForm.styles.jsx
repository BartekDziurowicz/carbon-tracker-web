import { styled } from "styled-components";
import { appred } from "../../../../utils/colors.styles";

export const $SelectorForm = styled.form`
  margin: 25px 100px 25px 0;
  display: flex;
  justify-content: flex-start;
  column-gap: 10px;
  row-gap: 5px;
  align-items: center;
  flex-wrap: wrap;
`

export const $ErrorLabel = styled.div`
  color: ${appred};
  text-align: center;
  font-size: 14px;
`

export default $SelectorForm;