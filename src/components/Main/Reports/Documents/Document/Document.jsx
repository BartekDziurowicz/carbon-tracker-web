import { useContext, useEffect, useState } from "react";
import { IoFlagOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { $Document, $Title, $Line } from "./Document.styles.jsx";
import Page from "./Page/Page.jsx";
import Dropdown from "./Dropdown/Dropdown.jsx";
import { ReportsContext } from "../../../../../store/reports-context.jsx";

export default function Document({ countryIndicator }) {
  const [splittedCountryIndicator, setSplittedCountryIndicator] = useState({
    country: "",
    memory: [],
    processor: [],
    workstation: [],
  });

  const { period } = useContext(ReportsContext);

  useEffect(() => {
    const countryKey = Object.keys(countryIndicator)[0];
    const memData = [];
    const proData = [];
    const worData = [];

    countryIndicator[countryKey].forEach((record) => {
      memData.push({
        group_name: record.group_name,
        period: record.period,
        car_sum_t: record.mem_car_sum_t,
        car_avg_th: record.mem_car_avg_th,
        usa_avg_th: record.mem_usa_avg_th,
        car_avg_um: record.mem_car_avg_um,
      });

      proData.push({
        group_name: record.group_name,
        period: record.period,
        car_sum_t: record.pro_car_sum_t,
        car_avg_th: record.pro_car_avg_th,
        usa_avg_th: record.pro_usa_avg_th,
        car_avg_um: record.pro_car_avg_um,
      });

      worData.push({
        group_name: record.group_name,
        period: record.period,
        car_sum_t: record.mem_car_sum_t + record.pro_car_sum_t,
        car_avg_th: record.mem_car_avg_th + record.pro_car_avg_th,
        usa_avg_th: (record.mem_usa_avg_th + record.pro_usa_avg_th)/2,
        car_avg_um: record.mem_car_avg_um + record.pro_car_avg_um,
      });
    });

    setSplittedCountryIndicator({
      country: countryKey,
      memory: memData,
      processor: proData,
      workstation: worData,
    });
  }, [countryIndicator]);

  return (
    <$Document>
      <$Title>
        <IoFlagOutline />
        {splittedCountryIndicator.country.toUpperCase()}
        <div>{period.start} - {period.end}</div>
        <CiCalendar />
      </$Title>
      <Page indicatorData={splittedCountryIndicator.workstation} section="workstation"/>
      <$Line />
      <Dropdown title="Processor details">
        <Page indicatorData={splittedCountryIndicator.processor} section="processor"/>
      </Dropdown>
      <$Line />
      <Dropdown title="Memory details">
        <Page indicatorData={splittedCountryIndicator.memory} section="memory"/>
      </Dropdown>
      <$Line />
      <div>TO DO button download</div>
    </$Document>
  );
}
