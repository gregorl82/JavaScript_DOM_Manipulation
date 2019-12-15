document.addEventListener('DOMContentLoaded', () => {

  const formElement = document.querySelector('#new-player-form');
  formElement.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-button');
  deleteAllButton.addEventListener('click', handleDeleteAll);
})

const handleFormSubmit = function(event){
  event.preventDefault();

  const newPlayerItem = createNewPlayerItem(event.target);
  const playerContainer = document.querySelector('#player-info');
  playerContainer.appendChild(newPlayerItem);

  event.target.reset();
}

const createNewPlayerItem = function(form){
  const newPlayerItem = document.createElement('div');
  newPlayerItem.classList.add('player-item');

  const playerName = document.createElement('h3');
  playerName.textContent = `${form.firstname.value} ${form.lastname.value}`;
  newPlayerItem.appendChild(playerName);

  const playerCountry = document.createElement('p');
  playerCountry.textContent = form.country.value;
  newPlayerItem.appendChild(playerCountry);

  const playerTitles = document.createElement('p');
  playerTitles.textContent = `Titles won in 2019: ${form.titles.value}`;
  newPlayerItem.appendChild(playerTitles);

  const playerRating = document.createElement('p');
  playerRating.textContent = `Rating out of 5: ${form.rating.value}`;
  newPlayerItem.appendChild(playerRating);

  return newPlayerItem;
}

const handleDeleteAll = function(event){
  const playerContainer = document.querySelector('#player-info');
  playerContainer.innerHTML = " ";
}
