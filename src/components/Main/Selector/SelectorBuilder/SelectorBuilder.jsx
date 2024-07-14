import $SelectorBuilder from "./SelectorBuilder.styles.jsx";
import BuilderButton from "./BuilderButton/BuilderButton.jsx";
import BuilderFilter from "./BuilderFilter/BuilderFilter.jsx";

export default function SelectorBuilder() {
  return (
    <$SelectorBuilder>
      <BuilderButton />
      <BuilderFilter />      
    </$SelectorBuilder>
  );
}
