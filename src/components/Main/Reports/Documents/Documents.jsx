import { useContext, useEffect, useState } from "react";
import $Documents from "./Documents.styles.jsx";
import Document from "./Document/Document.jsx";
import { ReportsContext } from "../../../../store/reports-context.jsx";

export default function Documents() {
  const [splittedIndicator, setSplittedIndicator] = useState([]);
  const { calculatedIndicator } = useContext(ReportsContext);

  useEffect(() => {
    const result = calculatedIndicator.reduce((acc, item) => {
      const { country_name, ...rest } = item;
      if (!acc[country_name]) {
        acc[country_name] = [];
      }
      acc[country_name].push(rest);
      return acc;
    }, {});

    const formattedResult = Object.keys(result).map((country) => ({
      [country]: result[country],
    }));
    setSplittedIndicator(formattedResult);
  }, [calculatedIndicator]);

  return (
    <$Documents>
      {splittedIndicator.map((country) => (
        <Document countryIndicator={country} />
      ))}
    </$Documents>
  );
}
