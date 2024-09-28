import $Page from "./Page.styles.jsx";
import Table from "./Table/Table.jsx";

export default function Page({ indicatorData, section }) {
  return (
    <$Page>
      <Table indicatorData={indicatorData} section={section}/>
    </$Page>
  );
}
