import Option from "./components/Option";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`;

// where the list of dog breeds will be populated.
const breedListEl = document.querySelector("#data-breed-list");

// This image element will display the fetched dog images.
const imageEl = document.querySelector("img");

// === MARK: Fetch

Purpose: Fetches the list of all dog breeds from the API.
function getDogsList() {
  return fetch(`${BASE_URL}breeds/list/all`)

  // Converts the response to JSON.
    .then((res) => res.json())

    // Extracts the message property from the JSON, which contains the breeds data.
    .then((data) => data.message)
    .catch((err) => console.error("error aagyi", err));
}

// TODO: Implement

// Purpose: Fetches a random image for a specified dog breed.
function getDogImage(breed) {

  // {breed} is the selected dog breed.
  fetch(`${BASE_URL}breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((data) => data.message);
}

// === MARK: Render
function renderSelect() {
  getDogsList().then((breedList) => {
    for (let breed in breedList) {
      breedListEl.appendChild(Option(breed));
    }
  });
}

renderSelect();

function renderImage() {}