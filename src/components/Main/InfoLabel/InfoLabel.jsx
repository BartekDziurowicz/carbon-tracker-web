import { CiCircleInfo } from "react-icons/ci";
import { $InfoLabel, $Icon, $Message } from "./InfoLabel.styles.jsx";

export default function InfoLabel() {
  return (
    <$InfoLabel>
      <$Icon>
        <CiCircleInfo />
      </$Icon>
      <$Message>
        No data to show. <div>Please, use above options to generate data.</div>
      </$Message>
    </$InfoLabel>
  );
}
