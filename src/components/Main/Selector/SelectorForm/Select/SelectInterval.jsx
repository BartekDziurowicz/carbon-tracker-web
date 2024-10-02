import $Select from "./Select.styles.jsx";

const INTERVALS = [
    {name: "1 m", value: 60}, 
    {name: "2 m", value: 120}, 
    {name: "3 m", value: 180}, 
    {name: "5 m", value: 300}, 
    {name: "10 m", value: 600}, 
    {name: "15 m", value: 900}, 
    {name: "30 m", value: 1800}, 
    {name: "1 h", value: 3600},
    {name: "2 h", value: 7200},
    {name: "3 h", value: 10800},
    {name: "4 h", value: 14400},
    {name: "8 h", value: 28800},
    {name: "1 d", value: 86400},
];

export default function SelectInterval({ onChange }) {

  return (
    <$Select defaultValue="default" onChange={onChange}>
      <option disabled value="default">
        -- select --
      </option>
      {INTERVALS
        .map((interval, index) => (
          <option value={interval.value} key={index}>{interval.name}</option>
        ))}
    </$Select>
  );
}