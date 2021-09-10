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
    document.getElementById('content').appendChild(characterSection)

    const sectionHeader = document.createElement('div')
    characterSection.appendChild(sectionHeader)

    const sectionTitle = document.createElement('h2')
    sectionTitle.textContent =
      'Character: ' + allData.name + ' (' + allData.actor + ')'
    sectionHeader.appendChild(sectionTitle)

    const sectionMainInformation = document.createElement('div')
    characterSection.appendChild(sectionMainInformation)

    const informationImg = document.createElement('img')
    informationImg.setAttribute('src', allData.image)
    sectionMainInformation.appendChild(informationImg)

    const mainInformationList = document.createElement('div')
    sectionMainInformation.appendChild(mainInformationList)

    const informationList = document.createElement('ul')
    mainInformationList.appendChild(informationList)

    const informationListElGender = document.createElement('li')
    informationListElGender.textContent = 'Gender: ' + allData.gender
    mainInformationList.appendChild(informationListElGender)

    const informationListElDateOfBirth = document.createElement('li')
    informationListElDateOfBirth.textContent =
      'Birthday: ' + allData.dateOfBirth
    mainInformationList.appendChild(informationListElDateOfBirth)

    const informationListElHouse = document.createElement('li')
    informationListElHouse.textContent = 'House: ' + allData.house
    mainInformationList.appendChild(informationListElHouse)

    const sectionSideInformation = document.createElement('div')
    characterSection.appendChild(sectionSideInformation)

    const sideInfoList = document.createElement('ul')
    sectionSideInformation.appendChild(sideInfoList)

    const wandTitle = document.createElement('h3')
    wandTitle.textContent = 'Wand:'
    sectionSideInformation.appendChild(wandTitle)

    const wandWood = [allData.wand.wood]
    wandWood.forEach(wood => {
      const wandWoodListEl = document.createElement('li')
      wandWoodListEl.textContent = 'Wood: ' + wood
      sectionSideInformation.appendChild(wandWoodListEl)
    })

    const wandCore = [allData.wand.core]
    wandCore.forEach(core => {
      const wandCoreListEl = document.createElement('li')
      wandCoreListEl.textContent = 'Core: ' + core
      sectionSideInformation.appendChild(wandCoreListEl)
    })

    const wandLength = [allData.wand.length]
    wandLength.forEach(length => {
      const wandLengthListEl = document.createElement('li')
      wandLengthListEl.textContent = 'Length: ' + length
      sectionSideInformation.appendChild(wandLengthListEl)
    })

    const patronusCharacter = document.createElement('div')
    patronusCharacter.textContent = 'Patronus: ' + allData.patronus
    characterSection.appendChild(patronusCharacter)
  })
}
