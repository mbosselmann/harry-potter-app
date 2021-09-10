export function fetchHarryPotterAPI() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(allData => {
      console.log(allData)
    })
    .catch(error => {
      console.log('Something went wrong!', error)
    })
}
