import { fetchHarryPotterAPIGryffindor } from './fetch'
import { renderAllContent } from './content'

export function setFilter(allData) {
  const filterContainer = document.createElement('div')
  filterContainer.classList.add('filter-container')
  document.getElementById('filter').appendChild(filterContainer)

  const filterContainerHeader = document.createElement('div')
  filterContainerHeader.classList.add('filter-container-header')
  filterContainer.appendChild(filterContainerHeader)

  const filterTitle = document.createElement('h2')
  filterTitle.classList.add('filter-title')
  filterTitle.textContent = 'Filter'.toUpperCase()
  filterContainerHeader.appendChild(filterTitle)

  const filterButtonEl = document.createElement('button')
  filterButtonEl.classList.add('expand-filter-button')
  filterContainerHeader.appendChild(filterButtonEl)

  const moreButtonImg = document.createElement('img')
  moreButtonImg.setAttribute('src', '/images/expand-more.png')
  moreButtonImg.classList.add('expand-more-img')
  filterButtonEl.appendChild(moreButtonImg)

  const filterSection = document.createElement('div')
  filterSection.classList.add('filter-section')
  filterSection.classList.add('section-content--hidden')
  filterContainer.appendChild(filterSection)

  const filterListHouseTitle = document.createElement('h3')
  filterListHouseTitle.classList.add('filter-section-title')
  filterListHouseTitle.textContent = 'Filter by house:'.toUpperCase()
  filterSection.appendChild(filterListHouseTitle)

  const filterListEl = document.createElement('div')
  filterListEl.classList.add('filter-list')
  filterSection.appendChild(filterListEl)

  const filterGryffindor = document.createElement('button')
  filterGryffindor.classList.add('filter-gryffindor')
  filterGryffindor.textContent = 'Gryffindor'
  filterListEl.appendChild(filterGryffindor)

  const filterRavenclaw = document.createElement('button')
  filterRavenclaw.classList.add('filter-ravenclaw')
  filterRavenclaw.textContent = 'Ravenclaw'
  filterListEl.appendChild(filterRavenclaw)

  const filterHufflepuff = document.createElement('button')
  filterHufflepuff.classList.add('filter-hufflepuff')
  filterHufflepuff.textContent = 'Hufflepuff'
  filterListEl.appendChild(filterHufflepuff)

  const filterSlytherin = document.createElement('button')
  filterSlytherin.classList.add('filter-slytherin')
  filterSlytherin.textContent = 'Slytherin'
  filterListEl.appendChild(filterSlytherin)

  const filterAllStudents = document.createElement('h3')
  filterAllStudents.classList.add('filter-section-title')
  filterAllStudents.textContent = 'Filter students or staff:'.toUpperCase()
  filterSection.appendChild(filterAllStudents)

  const filterAllStudentsContainer = document.createElement('div')
  filterAllStudentsContainer.classList.add('filter-list')

  filterSection.appendChild(filterAllStudentsContainer)

  const filterStudents = document.createElement('button')
  filterStudents.classList.add('filter-students')
  filterStudents.textContent = 'Students'
  filterAllStudentsContainer.appendChild(filterStudents)

  const filterStaff = document.createElement('button')
  filterStaff.classList.add('filter-staff')
  filterStaff.textContent = 'Staff'
  filterAllStudentsContainer.appendChild(filterStaff)

  filterButtonEl.addEventListener('click', () => {
    if (filterSection.classList.contains('section-content--hidden')) {
      filterSection.classList.remove('section-content--hidden')
      moreButtonImg.removeAttribute('src')
      moreButtonImg.setAttribute('src', '/images/expand-less.png')
      filterButtonEl.classList.remove('expand-filter-button')
      filterButtonEl.classList.add('expand-less-filter-button')
    } else {
      filterSection.classList.add('section-content--hidden')
      moreButtonImg.removeAttribute('src')
      moreButtonImg.setAttribute('src', '/images/expand-more.png')
      filterButtonEl.classList.remove('expand-less-filter-button')
      filterButtonEl.classList.add('expand-filter-button')
    }
  })

  filterGryffindor.addEventListener('click', () => {
    document.getElementById('content').innerHTML = ' '
    fetchHarryPotterAPIGryffindor(allData)
    filterSection.classList.add('section-content--hidden')
    moreButtonImg.removeAttribute('src')
    moreButtonImg.setAttribute('src', '/images/expand-more.png')
    filterButtonEl.classList.remove('expand-less-filter-button')
    filterButtonEl.classList.add('expand-filter-button')
  })
}
