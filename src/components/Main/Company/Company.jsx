import { useContext } from "react";
import { $Company } from "./Company.styles.jsx";
import Title from "./Title/Title.jsx";
import VMenu from "./VMenu/VMenu.jsx";

export default function Company() {
  return (
    <$Company>
      <Title />
      <Title />
      <VMenu />
      <VMenu />
    </$Company>
  );
}
