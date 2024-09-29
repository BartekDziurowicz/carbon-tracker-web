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
