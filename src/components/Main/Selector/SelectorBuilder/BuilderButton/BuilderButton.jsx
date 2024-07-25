import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import { IoSearch } from "react-icons/io5";
import { $BuilderButton } from "./BuilderButton.styles.jsx";

export default function BuilderButton() {
    const { showCriteria } = useContext(SelectorContext);

    return(
        <$BuilderButton showCriteria={showCriteria}>
            <div><IoSearch /></div>
            &nbsp;Show
        </ $BuilderButton>
    )
}