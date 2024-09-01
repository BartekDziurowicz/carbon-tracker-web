import { forwardRef } from "react";
import { $Childs, $Child, $Title, $Line } from "./Childs.styles.jsx";

const Childs = forwardRef(({ childName, color, children }, ref) => (
  <>
    <$Line />
    <$Childs>
      <$Title $color={color}>
        {children}
        {childName}
      </$Title>
      {ref.current.map((child, index) => (
        <$Child key={index}>{child}</$Child>
      ))}
    </$Childs>
  </>
));

export default Childs;
