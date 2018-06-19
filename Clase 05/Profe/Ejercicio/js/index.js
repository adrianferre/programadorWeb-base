// Datos iniciales

var oldCars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

// Función constructora

function Car (_model, _brand, _year) {
  // Propiedades privadas
  var _id = Math.random()

  // Propiedades públicas
  this.model = _model
  this.brand = _brand
  this.year = _year

  // Métodos públicos
  this.getCarName = function () {
    return this.model + ' ' + this.brand + ' ' + this.year
  }
}

var oldCar

var newCar
var newCars = []

// newCar = new Car('Twing', 'Renault', 2000)

// console.log(newCar.getCarName())

// newCar.model = 'Pato'
// newCar.brand = 'Ford'

// console.log(newCar.getCarName())

// Lleno un nuevo Array con los objetos creados con la función Car
for (var i = 0; i < oldCars.length; i++) {
  oldCar = oldCars[i]
  newCar = new Car(oldCar.model, oldCar.brand, oldCar.year)
  newCars.push(newCar)
}

console.log(oldCars)
console.log(newCars)
console.log(newCars[0].getCarName())
