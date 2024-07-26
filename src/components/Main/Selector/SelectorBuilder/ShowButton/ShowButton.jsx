import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import { IoSearch } from "react-icons/io5";
import { $ShowButton } from "./ShowButton.styles.jsx";

export default function ShowButton() {
    const { showCriteria } = useContext(SelectorContext);

    return(
        <$ShowButton $showCriteria={showCriteria}>
            <div><IoSearch /></div>
            &nbsp;Show
        </ $ShowButton>
    )
}