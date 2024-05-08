import { $CompanyItem } from './CompanyItem.styles.jsx';

export default function CompanyItem({ company }) {
    return (
        <$CompanyItem>
            {JSON.stringify(company)}
        </$CompanyItem>
        
    );
}