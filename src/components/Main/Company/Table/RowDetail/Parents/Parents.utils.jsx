export function determineFieldName(entityName) {
    switch (entityName) {
        case "location": return "city";
        case "employee": return "corporateKey";
        case "system": return "family";
        case "memory": return "partNumber";
        default: return "name";
      }
}