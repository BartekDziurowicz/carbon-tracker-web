import $Page from "./Page.styles.jsx";

export default function Page({ indicatorData }) {
    return (<$Page>{JSON.stringify(indicatorData)}</$Page>);
}