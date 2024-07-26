import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import { IoAddCircleOutline } from "react-icons/io5";
import { $AddButton } from "./AddButton.styles.jsx";

export default function AddButton() {
    const { tempWhereCriteria } = useContext(SelectorContext);

    const enabled = tempWhereCriteria.key !== "" && tempWhereCriteria.value !== "";

    function onClickFunction() {
        console.log("enbled", enabled);
        console.log("tempWhere", tempWhereCriteria);
    }

    return(
        <$AddButton $enabled={enabled} onClick={onClickFunction}>
            <div><IoAddCircleOutline /></div>
            &nbsp;Add
        </ $AddButton>
    )
}