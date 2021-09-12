//   <h2>FILTER</h2>
//   <ul>
//     <li>Gryffindor</li>
//     <li>Ravenclaw</li>
//     <li>Hufflepuff</li>
//     <li>Slytherin</li>
//     <li>Students</li>
//     <li>Hogwarts Staff</li>
//     <li>Alive</li>
//     <li>Dead</li>
//     <li>Sort by Age</li>
//     <li></li>
//   </ul>

export function setFilter() {
  const filterContainer = document.createElement('div')
  document.getElementById('filter').appendChild(filterContainer)

  const filterTitle = document.createElement('h2')
  filterTitle.textContent = 'Filter'
  filterContainer.appendChild(filterTitle)
}
