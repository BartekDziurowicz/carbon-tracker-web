import { $Button } from "./Button.styles.jsx";

export default function Button({ enabled, name, children, ...props}) {

    return(
        <$Button $enabled={enabled} {...props}>
            <div>{ children }</div>
            &nbsp;{ name }
        </ $Button>
    )
}