import { useEffect, useState } from 'react';
import CompanyItem from './CompanyItem/CompanyItem.jsx';
import $MetricsCompany from "./MetricsCompany.styles.jsx";

const tempCompany = [
    {
        id: 1,
        name: 'Corporate Name1',
        postal_code: '12-123',
        street: 'streetname1',
        street_number: 11,
        apartment_number: 1,
        carbon_limit: 700.00,
        location: {
            id: 1,
            city: 'CityName',
            country: {
                id: 3,
                name: 'CountryName'
            }
        }
    },
    {
        id: 2,
        name: 'Corporate Name2',
        postal_code: '12-124',
        street: 'streetname2',
        street_number: 232,
        apartment_number: 32,
        carbon_limit: 750.00,
        location: {
            id: 3,
            city: 'CityName2',
            country: {
                id: 4,
                name: 'CountryName2'
            }
        }
    }
]

export default function MetricsCompany() {

    const [availableCompanies, setAvailableCompanies] = useState([]);

    useEffect(() => {
        // To DO strzal do bazy po company, w chwili obecnej mock
        const companies = tempCompany;;
        setAvailableCompanies(companies);
    }, []);

    function selecetedCompanyHandler() {
        // do session storage
        // funckja musi byc wywolywana jak CompanyItem zostanei onClick
        // wtedy stepper +1
    }

    return(
        <$MetricsCompany>
            {availableCompanies.map((company) => {
                return <CompanyItem company={company} />
            })}
        </$MetricsCompany>
    );
}