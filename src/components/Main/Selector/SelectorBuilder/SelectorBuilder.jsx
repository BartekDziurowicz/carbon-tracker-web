import $SelectorBuilder from "./SelectorBuilder.styles.jsx";
import BuilderButton from "./BuilderButton/BuilderButton.jsx";
import BuilderFilter from "./BuilderFilter/BuilderFilter.jsx";
import BuilderLabel from "./BuilderLabel/BuilderLabel.jsx";
import BuilderValues from "./BuilderValues/BuilderValues.jsx";

export default function SelectorBuilder() {
  return (
    <$SelectorBuilder>
      <BuilderButton />
      <BuilderFilter criteria='show'/>
      <BuilderLabel />
      <BuilderFilter criteria='where'/>
      <BuilderValues />
    </$SelectorBuilder>
  );
}
