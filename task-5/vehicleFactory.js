function vehicleFactory(type) {
  switch (type) {
    case "Car":
      return {
        type: "Car",
        wheels: 4,
        engine: "21W"
      };

    case "Bike":
      return {
        type: "Bike",
        wheels: 2
      };

    case "Truck":
      return {
        type: "Truck",
        wheels: 12,
        localCapacity: 80
      };

    default:
      return "Unknown type";
  }
}

console.log(vehicleFactory("Car"));
console.log(vehicleFactory("Bike"));
console.log(vehicleFactory("Truck"));
console.log(vehicleFactory("Bycicle"));
