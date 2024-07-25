import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { $BuilderLabel } from "./BuilderLabel.styles.jsx";

export default function BuilderButton() {
    return(
        <$BuilderLabel>
            <div><IoArrowForwardCircleOutline /></div>
            &nbsp;where
        </ $BuilderLabel>
    )
}