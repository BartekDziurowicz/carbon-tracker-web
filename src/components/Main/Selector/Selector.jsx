import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SelectorForm from "./SelectorForm/SelectorForm.jsx";
import SelectorCurrentFilters from "./SelectorCurrentFilters/SelectorCurrentFilters.jsx";
import { SelectorContext } from "../../../store/selector-context.jsx";
import $Selector from "./Selector.styles.jsx";

export default function Selector() {
  const selectorFiltersData = useLoaderData();

  const { setSelectorFilters } = useContext(SelectorContext);

  useEffect(() => {
    setSelectorFilters(selectorFiltersData);
  }, []);

  return (
    <>
      <$Selector>
        <SelectorForm />
        <SelectorCurrentFilters />
        charts elements
      </$Selector>      
    </>
  );
}

export async function filtersLoader() {
  const response = await fetch("http://localhost:8080/filter/filters");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get selector filters.");
  }

  return resData;
}
