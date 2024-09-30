import { Tooltip } from "react-tooltip";

export function getTableColumns(section, currentIndicator) {
  const columns = [
    {
      accessorKey: "group_name",
      id: "group_name",
      header: () => (
        <a
          data-tooltip-id={"group" + section}
          data-tooltip-content={"The column contains the unit names of the selected indicator."}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"top-start"}
        >
          {currentIndicator.charAt(0).toUpperCase() +
            currentIndicator.slice(1).replace(/([A-Z])/g, " $1")}
          <Tooltip id={"group" + section} />
        </a>
      ),
      footer: "Summary"
    },
    {
      accessorKey: "car_sum_t",
      id: "car_sum_t",
      header: () => (
        <a
          data-tooltip-id={"car_sum_t" + section}
          data-tooltip-content={"The column shows the sum of the carbon footprint for a given unit over the selected time period."}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"top"}
        >
          Carbon [kgCO₂e]
          <Tooltip id={"car_sum_t" + section} />
        </a>
      ),
      footer: ({ table }) => table.getFilteredRowModel().rows.reduce((acc, val) => {
        acc += Number(val.getValue("car_sum_t"));
        return acc;
      }, 0)
    },
    {
      accessorKey: "car_avg_th",
      id: "car_avg_th",
      header: () => (
        <a
          data-tooltip-id={"car_avg_th" + section}
          data-tooltip-content={"The column shows the average carbon footprint per hour over a selected period of time."}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"top"}
        >
          Carbon avg [kgCO₂e/h]
          <Tooltip id={"car_avg_th" + section} />
        </a>
      ),
      footer: ({ table }) => {
        const { sum, count } = table.getFilteredRowModel().rows.reduce((acc, val) => {
          acc.sum += Number(val.getValue("car_avg_th"));
          acc.count += 1;
          return acc;
        }, { sum: 0, count: 0 });
      
        return sum / count;
      }
    },
    {
      accessorKey: "usa_avg_th",
      id: "usa_avg_th",
      header: () => (
        <a
          data-tooltip-id={"usa_avg_th" + section}
          data-tooltip-content={"The column shows the average resource consumption per hour over a selected period of time."}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"top"}
        >
          Usage avg [%/h]
          <Tooltip id={"usa_avg_th" + section} />
        </a>
      ),
      footer: ({ table }) => {
        const { sum, count } = table.getFilteredRowModel().rows.reduce((acc, val) => {
          acc.sum += Number(val.getValue("usa_avg_th"));
          acc.count += 1;
          return acc;
        }, { sum: 0, count: 0 });
      
        return sum / count;
      }
    },
    {
      accessorKey: "car_avg_um",
      id: "car_avg_um",
      header: () => (
        <a
          data-tooltip-id={"car_avg_um" + section}
          data-tooltip-content={"The column shows the average carbon footprint per employee over a selected period of time."}
          data-tooltip-delay-show={1000}
          data-tooltip-place={"top-end"}
        >
          Carbon avg [kgCO₂e/emp]
          <Tooltip id={"car_avg_um" + section} />
        </a>
      ),
      footer: ({ table }) => {
        const { sum, count } = table.getFilteredRowModel().rows.reduce((acc, val) => {
          acc.sum += Number(val.getValue("car_avg_um"));
          acc.count += 1;
          return acc;
        }, { sum: 0, count: 0 });
      
        return sum / count;
      }
    },
  ];

  return columns;
}
