import { $Document } from "./Document.styles.jsx";

export default function Document({ countryIndicator }) {
    return (<$Document>{JSON.stringify(countryIndicator)}</$Document>);
}