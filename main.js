import { fetchHarryPotterAPI } from './js/fetch.js'

function init() {
  document.getElementById('content').innerHTML = ' '
  fetchHarryPotterAPI()
}
init()
