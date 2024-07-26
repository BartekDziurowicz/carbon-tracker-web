import $SelectorBuilder from "./SelectorBuilder.styles.jsx";
import ShowButton from "./ShowButton/ShowButton.jsx";
import BuilderFilter from "./BuilderFilter/BuilderFilter.jsx";
import BuilderLabel from "./BuilderLabel/BuilderLabel.jsx";
import BuilderValues from "./BuilderValues/BuilderValues.jsx";
import AddButton from "./AddButton/AddButton.jsx";

export default function SelectorBuilder() {
  return (
    <$SelectorBuilder>
      <ShowButton />
      <BuilderFilter criteria='show'/>
      <BuilderLabel />
      <BuilderFilter criteria='where'/>
      <BuilderValues />
      <AddButton />
    </$SelectorBuilder>
  );
}
