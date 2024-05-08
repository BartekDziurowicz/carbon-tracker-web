import MetricsStepper from './MetricsStepper/MetricsStepper.jsx';
import MetricsCompany from './MetricsCompany/MetricsCompany.jsx';
import $Metrics from './Metrics.styles.jsx';

export default function Metrics() {
    return (
        <$Metrics>
            <MetricsStepper />
            <MetricsCompany />
        </$Metrics>
    );
}