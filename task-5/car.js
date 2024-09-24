function createCar(brand, model, year, isElectric) {
  return new Object({
    brand,
    model,
    year,
    isElectric,
  });
}
const car = createCar("Range Rover", "L320", 2013, true);
console.log(car);
