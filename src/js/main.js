import option from "./components/option";

// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const BASE_URL = `https://dog.ceo/api/`

const imageEl = document.querySelector("img");
const breedListEl =document.querySelector("data-breed-list");
// console.log(dataBreedList)

// fetch function

function getDogList(){
 fetch(`${BASE_URL}breeds/list/all`)
 .then((res) => res.json())
 .then((data) => data.message)
 .catch((err) => console.error("error",err))
}
getDogList();


// TODO: this
function getDogImage(){}


function renderSelect(){
getDogList().then((breedList) => {
  for(let breed in breedList){
    const option= document.createElement("option")
  option.textContent= "breed"
  breedListEl.appendChild(option)
  }
} );
}
renderSelect();

  // const option= document.createElement("option")
  // option.textContent= "some data"
  // option.value = "some value"


function renderImage(){}



// async - function can handle operations that don’t happen instantly.  async allows the script to wait for the image without freezing the whole webpage

// async function getImage() {

//     // fetch is like sending a message asking for information.
//     //   await tells the script to wait until it gets the response before moving on.

//   const res = await fetch(
//     `https://dog.ceo/api/breed/affenpinscher/images/random`
//   );

// //   After getting the response, converts that response into JSON (JavaScript Object Notation).
//   const data = await res.json();
//   console.log(data.message);

//   imageEl.src = data.message;
// }

// getImage();