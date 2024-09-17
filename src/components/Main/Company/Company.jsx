import { $Company } from "./Company.styles.jsx";
import Table from "./Table/Table.jsx";
import Title from "./Title/Title.jsx";
import VMenu from "./VMenu/VMenu.jsx";

export default function Company() {
  return (
    <$Company>
      <Title />
      <Table />
      <VMenu />      
    </$Company>
  );
}
