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
  filterContainer.classList.add('filter-container')
  document.getElementById('filter').appendChild(filterContainer)

  const filterContainerHeader = document.createElement('div')
  filterContainerHeader.classList.add('filter-container-header')
  filterContainer.appendChild(filterContainerHeader)

  const filterTitle = document.createElement('h2')
  filterTitle.classList.add('filter-title')
  filterTitle.textContent = 'Filter'
  filterContainerHeader.appendChild(filterTitle)

  const filterButtonEl = document.createElement('button')
  filterButtonEl.classList.add('expand-filter-button')
  filterContainerHeader.appendChild(filterButtonEl)

  const moreButtonImg = document.createElement('img')
  moreButtonImg.setAttribute('src', '/images/expand-more.png')
  moreButtonImg.classList.add('expand-more-img')
  filterButtonEl.appendChild(moreButtonImg)

  //   const sectionMainInformation = document.createElement('div')
  //   sectionMainInformation.classList.add('section-content--hidden')
  //   filterContainer.appendChild(sectionMainInformation)

  filterButtonEl.addEventListener('click', () => {
    if (sectionMainInformation.classList.contains('section-content--hidden')) {
      sectionMainInformation.classList.remove('section-content--hidden')
      moreButtonImg.removeAttribute('src')
      moreButtonImg.setAttribute('src', '/images/expand-less.png')
      filterButtonEl.classList.remove('expand-filter-button')
      filterButtonEl.classList.add('expand-less-filter-button')
    } else {
      sectionMainInformation.classList.add('section-content--hidden')
      moreButtonImg.removeAttribute('src')
      moreButtonImg.setAttribute('src', '/images/expand-more.png')
      filterButtonEl.classList.remove('expand-less-filter-button')
      filterButtonEl.classList.add('expand-filter-button')
    }
  })
}
