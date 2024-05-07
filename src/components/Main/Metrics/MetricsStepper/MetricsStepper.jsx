import Step from './Step/Step.jsx';
import { CiUser } from "react-icons/ci";
import { GiOrganigram } from "react-icons/gi";
import { SiAwsorganizations } from "react-icons/si";
import { SlOrganization } from "react-icons/sl";
import { VscOrganization } from "react-icons/vsc";
import { $MetricsStepper } from './MetricsStepper.styles.jsx';

const STEPS = [
    {id: 'Company', icon: <SiAwsorganizations />},
    {id: 'Area', icon: <SlOrganization />},
    {id: 'Tribe', icon: <GiOrganigram />},
    {id: 'Team', icon: <VscOrganization />},
    {id: 'Employee', icon: <CiUser />}
];

export default function MetricsStepper () {
    return(
        <$MetricsStepper>
        <ol>
        {STEPS.map((step) => <menu><Step stepName={step.id} status='inactive'>{step.icon}</Step></menu>)}
        </ol>
            
        </$MetricsStepper>
    );
}