import { renderAllContent } from './content'

export function fetchHarryPotterAPI() {
  fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(renderAllContent)
    .catch(error => {
      console.log('Something went wrong!', error)
    })
}

export function fetchHarryPotterAPIGryffindor() {
  fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then(response => response.json())
    .then(renderAllContent)
    .catch(error => {
      console.log('Hmmm. Something went wrong.', error)
    })
}
