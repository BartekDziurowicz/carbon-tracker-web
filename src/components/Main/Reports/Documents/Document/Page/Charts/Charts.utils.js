export function headerContentHandler(content) {
  switch (content) {
    case "car_sum_t":
      return "Carbon [kgCO₂e]";
    case "car_avg_um":
      return "Carbon avg [kgCO₂e/emp]";
    case "car_avg_th":
      return "Carbon avg [kgCO₂e/h]";
    case "usa_avg_th":
      return "Usage avg [%/h]";
  }
}

export function chartsTooltipContentHandler(content) {
    switch (content) {
      case "car_sum_t" :return "The graph shows the sum of the carbon footprint produced per month by the unit.";
      case "car_avg_um" :return "The graph shows the average of the carbon footprint produced per month by employee with a breakdown by units.";
      case "car_avg_th" :return "The graph shows the average of the carbon footprint produced per working hour by the unit.";
      case "usa_avg_th" :return "The graph shows the average of the workstation usage per working hour by the unit.";
    }
  
}
