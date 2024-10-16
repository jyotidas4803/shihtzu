// MARK: Imports
import Option from "./components/Option";
import SingleCarousel from "./components/SingleCarousel";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`;

// === MARK: DOM Selection
const breedListEl = document.querySelector("#data-breed-list");
const caouselContetntEl= document.querySelector("content")

const imageEl = document.querySelector("img");

// === MARK: Fetch
async function getDogsList() {
  try {
    const res = await fetch(`${BASE_URL}breeds/list/all`);
    const data = await res.json();
    return data.message;
  } catch (err) {
    console.error("Error occured", err);
  }
}

// Fetch a single dog breed image
async function getDogImage(breed) {
  try {
    const res = await fetch(`${BASE_URL}breed/${breed}/images/random`);
    const data = await res.json();
    return data.message;
  } catch (error) {
    return console.error(error);
  }
}

// === MARK: Render
async function renderSelect() {
  const dogsList = await getDogsList();

  const fragment = document.createDocumentFragment();

  Object.keys(dogsList).forEach((dogName) => {
    breedListEl.appendChild(Option(dogName));
  });
}

async function renderImage(breed) {
  imageEl.src="loading-load.gif"
  const dogImage = await getDogImage(breed);
  imageEl.src = dogImage;
}

renderImage("poodle");

renderSelect();

// === MARK:  Events
breedListEl.addEventListener("change", async (e) => {
  const currentValue = e.target.value;
  renderImage(currentValue);
});