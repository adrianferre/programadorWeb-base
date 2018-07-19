import './router'
import { setLocalList } from './utils/localStorage'

setLocalList('PAto', [ 1, 2, 3, 4 ])

$(document).ready(function () {
  console.log('Init app')
})
