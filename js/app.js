document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const formElement = document.querySelector('#new-player-form')

  const handleFormSubmit = function(event){

    event.preventDefault()

    const firstName = event.target.firstname.value
    const lastName = event.target.lastname.value
    const country = event.target.country.value
    const titles = event.target.titles.value

    const playerName = document.createElement('h3')
    const playerCountry = document.createElement('p')
    const playerTitles = document.createElement('p')

    playerName.textContent = `${firstName} ${lastName}`
    playerCountry.textContent = `${country}`
    playerTitles.textContent = `Titles won in 2019: ${titles}`

    const playerContainer = document.querySelector('#player-info')

    playerContainer.appendChild(playerName)
    playerContainer.appendChild(playerCountry)
    playerContainer.appendChild(playerTitles)
  }
  formElement.addEventListener('submit', handleFormSubmit)

})
