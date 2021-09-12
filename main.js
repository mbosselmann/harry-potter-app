import { fetchHarryPotterAPI } from './js/fetch'
import { setFilter } from './js/filter'

function init() {
  document.getElementById('content').innerHTML = ' '
  fetchHarryPotterAPI()
  setFilter()
}
init()
