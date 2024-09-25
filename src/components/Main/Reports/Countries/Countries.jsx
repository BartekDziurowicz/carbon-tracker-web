import { useContext } from "react";
import { $Countries, $Label } from "./Countries.styles.jsx";
import { ReportsContext } from "../../../../store/reports-context.jsx";

export default function Countries() {
  const { setCountries, countries } = useContext(ReportsContext);

  const checkboxHandler = (event, id) => {
    let updatedCountries = [...countries];
    const index = updatedCountries.findIndex(country => country.id === id);
    updatedCountries[index].selected = event.target.checked;
    setCountries(updatedCountries);
  };

  return (
    <$Countries>
      {countries.map((country) => (
        <$Label>
          <input
            type="checkbox"
            defaultChecked={country.selected}
            onChange={(event) => checkboxHandler(event, country.id)}
          />
          {country.name}
        </$Label>
      ))}
    </$Countries>
  );
}
