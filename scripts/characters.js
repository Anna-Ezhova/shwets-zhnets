

async function getCharacters() {
/* 
    const characterFile = await fetch("data/characters.json")
    const characterJSON = await characterFile.json()
    const characterObject = await JSON.parse(characterJSON)

    console.log(characterObject)
   for (const char in characterObject) {
    console.log(char)
   } */
await fetch("data/characters.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("characterContainer");

    Object.entries(data).forEach(([key, person]) => {

        if (key === "talaya" ) {return} 
        
      const card = document.createElement("div");
      card.classList.add("charScreen")

      card.innerHTML = `
        <h2>${person.name}</h2>
        ${person.name_short ? `<h3>${person.name_short}</h3>` : ""}
        <img src="${person.img}" alt="${person.name}">
        <p>${person.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

    
}




getCharacters()