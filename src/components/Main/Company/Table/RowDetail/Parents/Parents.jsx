import { forwardRef } from "react";
import { $Parents } from "./Parents.styles.jsx";
import { $Line } from "../Childs/Childs.styles.jsx";

const Parents = forwardRef(({}, ref) => (
  <>
    <$Line />
    <$Parents>{JSON.stringify(ref.current)}</$Parents>
  </>
));

export default Parents;
