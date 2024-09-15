import { forwardRef, useImperativeHandle, useState } from "react";
import { Tooltip } from "react-tooltip";
import { $Search, $Input, $Icon } from "./Search.styles.jsx";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const Search = forwardRef(function Search({ color, onChange, createRowHandler }, ref) {

  const[enabled, setEnabled] = useState(true);

  useImperativeHandle(ref, () => ({
    changeEnabled: (state) => {
        setEnabled(_prevValue => state);      
    }
  }));

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
        <$Icon $color={enabled && color} $action={true} onClick={enabled ? createRowHandler : () => {}}>
          <IoIosAddCircleOutline />
        </$Icon>
        <Tooltip id={"create_tooltip"} />
      </a>
    </$Search>
  );
});

export default Search;
