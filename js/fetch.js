import { renderAllContent } from './content.js'

export function fetchHarryPotterAPI() {
  fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(allData => {
      renderAllContent(allData)
      console.table(allData)
    })
    .catch(error => {
      console.log('Something went wrong!', error)
    })
}
