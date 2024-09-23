import { $Label } from "./Label.styles.jsx";

export default function BuilderButton({ name, children }) {
  return (
    <$Label>
      <div>{children}</div>
      &nbsp;{name}
    </$Label>
  );
}
