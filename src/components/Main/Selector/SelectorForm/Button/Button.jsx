import { $Button } from "./Button.styles.jsx";

export default function Button({ enabled, name, children }) {

    return(
        <$Button $enabled={enabled}>
            <div>{ children }</div>
            &nbsp;{ name }
        </ $Button>
    )
}