import { IoSearch } from "react-icons/io5";
import { $BuilderButton } from "./BuilderButton.styles";

export default function BuilderButton() {
    return(
        <$BuilderButton>
            <div><IoSearch /></div>
            &nbsp;Show
        </ $BuilderButton>
    )
}