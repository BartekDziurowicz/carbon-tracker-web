import { useContext, useEffect, useState } from "react";
import MetricsItem from "./MetricsItem/MetricsItem.jsx";
import $MetricsContent from "./MetricsContent.styles.jsx";
import { apiCallForMetrics, MetricsContext } from "../../../../store/metrics-context.jsx";

export default function MetricsContent() {
  const { currentStep } = useContext(MetricsContext);
  const [availableMetrics, setAvailableMetrics] = useState([]);

  useEffect(() => {  
    const metrics = apiCallForMetrics(currentStep, 0);
    setAvailableMetrics((_prevMetrics) => metrics);
  }, [currentStep])

  return (
    <$MetricsContent>
      {availableMetrics.map((metric, index) => {
        return <MetricsItem key={index} metric={metric} index={index} />;
      })}
    </$MetricsContent>
  );
}
