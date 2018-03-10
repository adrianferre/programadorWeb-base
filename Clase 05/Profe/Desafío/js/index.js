function Movie (title, year, director, actors) {
  var id = Math.random()
  var createdAt = new Date()
  var updatedAt = null

  this.setTitle = function (newTitle) {
    title = newTitle
    updatedAt = new Date()
  }

  this.setYear = function (newYear) {
    year = newYear
    updatedAt = new Date()
  }

  this.setDirector = function (newDirector) {
    director = newDirector
    updatedAt = new Date()
  }

  this.setActor = function (actor) {
    actors.push(actor)
    updatedAt = new Date()
  }

  this.getTitle = function () {
    return title
  }

  this.getYear = function () {
    return year
  }

  this.getDirector = function () {
    return director
  }

  this.getActors = function () {
    return actors
  }

  this.getUpdatedAt = function () {
    return updatedAt
  }

  this.showInfo = function () {
    console.log(
      'Titúlo: ' +
        title +
        ', Año: ' +
        year +
        ', Director: ' +
        director +
        ', Actores: ' +
        actors.join(' / ') +
        ', Fecha de creación: ' +
        createdAt +
        ', Fecha de modificación: ' +
        updatedAt
    )
  }
}

var matrix = new Movie('Matrix', '1999', 'Hermanas Wachowski', [
  'Keanu Reeves'
])

matrix.showInfo()

matrix.setActor('Carrie‑Anne Moss')

matrix.setActor('Laurence Fishburne')

var newActor = prompt('Ingresá un actor más')

matrix.setActor(newActor)

matrix.showInfo()
