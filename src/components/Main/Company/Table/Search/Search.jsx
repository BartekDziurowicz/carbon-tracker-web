import { $Search, $Input, $Icon } from "./Search.styles.jsx";
import { CiSearch } from "react-icons/ci";

export default function Search({ color, onChange }) {
  return (
    <$Search>
      <$Icon $color={color}><CiSearch /></$Icon>
      <$Input placeholder="Search..." onChange={onChange} />
    </$Search>
  );
}
