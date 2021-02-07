// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".result")

async function createList() {

    try {
        const response = await fetch(url);

        const result = await response.json();
        
        const list = result.results;

        resultContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {

        const tags = list[i].tags

        resultContainer.innerHTML += 
        `<div>Name: ${list[i].name}, 
        Rating: ${list[i].rating}, 
        Number of tags: ${tags.length}</div>`;
    }
  }
  catch(error) {
      console.log(error);
      resultContainer.innerHTML = "Oh no! There is an error!";
  }
}

createList();