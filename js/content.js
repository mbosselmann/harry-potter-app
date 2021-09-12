//   ;<section>
//     <div>Character: name actor</div>
//     <div>
//       Content: species gender house dateOfBirth yearOfBirth ancestry
//       eyeColour hairColour
//     </div>
//     <img src="" alt="" />
//     <div>Content: wand patronus</div>
//   </section>
// export function doSomethingWithData(allData) {
//   console.log('doSomethingWithData called')
//   allData.forEach(character => {
//     console.log(character.name)
//   })
// }

export function renderAllContent(allData) {
  allData.forEach(allData => {
    const characterSection = document.createElement('section')
    characterSection.classList.add('section-card')
    document.getElementById('content').appendChild(characterSection)

    const sectionHeader = document.createElement('div')
    sectionHeader.classList.add('section-header')
    characterSection.appendChild(sectionHeader)

    const informationImg = document.createElement('img')
    informationImg.classList.add('section-img')
    informationImg.setAttribute('src', allData.image)
    sectionHeader.appendChild(informationImg)

    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section-header-title')
    sectionTitle.textContent = allData.name + ' (' + allData.actor + ')'
    sectionHeader.appendChild(sectionTitle)

    const sectionMainInformation = document.createElement('div')
    characterSection.appendChild(sectionMainInformation)

    const mainInformationList = document.createElement('div')
    mainInformationList.classList.add('section-content')
    sectionMainInformation.appendChild(mainInformationList)

    const informationList = document.createElement('ul')
    informationList.classList.add('main-info-list')
    mainInformationList.appendChild(informationList)

    const basicTitle = document.createElement('h3')
    basicTitle.textContent = 'Basics:'
    informationList.appendChild(basicTitle)

    const informationListElGender = document.createElement('li')
    informationListElGender.textContent = 'Gender: ' + allData.gender
    informationList.appendChild(informationListElGender)

    const informationListElDateOfBirth = document.createElement('li')
    informationListElDateOfBirth.textContent =
      'Birthday: ' + allData.dateOfBirth
    informationList.appendChild(informationListElDateOfBirth)

    const informationListElHouse = document.createElement('li')
    informationListElHouse.textContent = 'House: ' + allData.house
    informationList.appendChild(informationListElHouse)

    const patronusCharacter = document.createElement('li')
    patronusCharacter.textContent = 'Patronus: ' + allData.patronus
    informationList.appendChild(patronusCharacter)

    const sideInfoList = document.createElement('ul')
    sideInfoList.classList.add('wand-list')
    mainInformationList.appendChild(sideInfoList)

    const wandTitle = document.createElement('h3')
    wandTitle.textContent = 'Wand:'
    sideInfoList.appendChild(wandTitle)

    const wandWood = [allData.wand.wood]
    wandWood.forEach(wood => {
      const wandWoodListEl = document.createElement('li')
      wandWoodListEl.textContent = 'Wood: ' + wood
      sideInfoList.appendChild(wandWoodListEl)
    })

    const wandCore = [allData.wand.core]
    wandCore.forEach(core => {
      const wandCoreListEl = document.createElement('li')
      wandCoreListEl.textContent = 'Core: ' + core
      sideInfoList.appendChild(wandCoreListEl)
    })

    const wandLength = [allData.wand.length]
    wandLength.forEach(length => {
      const wandLengthListEl = document.createElement('li')
      wandLengthListEl.textContent = 'Length: ' + length
      sideInfoList.appendChild(wandLengthListEl)
    })
  })
}
