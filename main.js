// https://dog.ceo/api/breed/affenpinscher/images/random
// https://dog.ceo/api/breeds/list/all

const imageEl = document.querySelector("img");

// async - function can handle operations that don’t happen instantly.  async allows the script to wait for the image without freezing the whole webpage

async function getImage() {

    // fetch is like sending a message asking for information.
    //   await tells the script to wait until it gets the response before moving on.

  const res = await fetch(
    `https://dog.ceo/api/breed/affenpinscher/images/random`
  );

//   After getting the response, converts that response into JSON (JavaScript Object Notation).
  const data = await res.json();
  console.log(data.message);

  imageEl.src = data.message;
}

getImage();