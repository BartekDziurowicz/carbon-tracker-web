import { Tooltip } from "react-tooltip";
import { $Search, $Input, $Icon } from "./Search.styles.jsx";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Search({ color, onChange, createRowHandler }) {
  return (
    <$Search>
      <$Icon $color={color}>
        <CiSearch />
      </$Icon>
      <$Input $color={color} placeholder="Search..." onChange={onChange} />
      <a
        data-tooltip-id={"create_tooltip"}
        data-tooltip-content={"Create"}
        data-tooltip-delay-show={1000}
        data-tooltip-place={"top-start"}
      >
        <$Icon $color={color} $action={true} onClick={createRowHandler}>
          <IoIosAddCircleOutline />
        </$Icon>
        <Tooltip id={"create_tooltip"} />
      </a>
    </$Search>
  );
}
