const container = document.getElementById("container")
var index = 0
var current_chapter = ""

async function getChapterData(chapter) {
  try {
    const response = await fetch("data/chapters.json");

    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }

    const data = await response.json();
    return data[chapter]; 
  } catch (error) {
    console.error("Error loading data:", error);
    return null;
  }
}

//button that leads to avatars

function createButtonScreen (obj) {
const textScreen = document.createElement("div")
   textScreen.classList.add("screen")
 

const textContainer = document.createElement("div")
textContainer.classList.add("vn-panel")
const textParagraph = document.createElement("p")
textParagraph.classList.add("vn-text")
textParagraph.innerHTML=obj.text

textContainer.append(textParagraph)

const btn = document.createElement("button")
btn.classList.add("vn-button")
btn.innerHTML = obj.btnText
btn.addEventListener("click", () => {

window.location.href = obj.link

})

textContainer.append(btn)
textScreen.append(textContainer)

return textScreen
  
} 

function createChapterName (object) {
const textScreen = document.createElement("div")
   textScreen.classList.add("screen")
   textScreen.addEventListener("click", nextScreen)

const textContainer = document.createElement("div")
textContainer.classList.add("chapter-container")
const chapterNum = document.createElement("div")
chapterNum.classList.add("chapter-number")
chapterNum.innerHTML = object.num
textContainer.append(chapterNum)
const chapterName = document.createElement("div")
chapterName.classList.add("chapter-title")
chapterName.innerHTML = object.name
textContainer.append(chapterName)

const clickAnywhere = document.createElement("div")
clickAnywhere.classList.add("continue-text")
clickAnywhere.innerHTML = "Кликни, чтобы продолжить"
textContainer.append(clickAnywhere)

textScreen.append(textContainer)

return textScreen

}

//characters
function buildCharacterPage (charObj ) {


const container = document.createElement("div")
container.classList.add("screen")

container.addEventListener("click", nextScreen)

const charField= document.createElement("div")
charField.classList.add("character-container")

const imgContainer = document.createElement("div")
imgContainer.classList.add("character-image")
const img = document.createElement("img")
img.src = charObj.img
img.alt = charObj.name
imgContainer.append(img)
charField.append(imgContainer)

const charInfo = document.createElement("div")
charInfo.classList.add("character-info")
const charName = document.createElement("div")
charName.classList.add("character-name")
charName.innerHTML = charObj.name
const charDesc = document.createElement("div")
charDesc.classList.add("character-description")
charDesc.innerHTML = charObj.description
charInfo.append(charName)
charInfo.append(charDesc)
charField.append(charInfo)
container.append(charField)



return container



}
//text
function buildTextField (text) {

const textScreen = document.createElement("div")
   textScreen.classList.add("screen")
   textScreen.addEventListener("click", nextScreen)

const textContainer = document.createElement("div")
    textContainer.classList.add("dialogue-box")

    const textField = document.createElement("div")
    textField.classList.add("dialogue-text")
    textField.innerHTML = text 
    textContainer.append(textField)

    textScreen.append(textContainer)
     
    return textScreen

}
//character_text
function buildCharacterTextField (obj) {
const textScreen = document.createElement("div")
   textScreen.classList.add("screen")
   textScreen.addEventListener("click", nextScreen)
 const imgContainer = document.createElement("div")
        imgContainer.classList.add("characters")

        const imgArray = obj.img

        for (let n = 0; n < imgArray.length; n++) {
          const imgElement = document.createElement("img")
          imgElement.src = imgArray[n]
          imgElement.classList.add("character")
          switch (n) {
            case 0:
              imgElement.classList.add("left")
              break;
            case 1:
              imgElement.classList.add("right")
              break;
          
            default:
              break;

              
          }
          imgContainer.append(imgElement)
        }
        textScreen.append(imgContainer)
const textContainer = document.createElement("div")
    textContainer.classList.add("dialogue-box")
 const textField = document.createElement("div")
    textField.classList.add("dialogue-text")
    textField.innerHTML = obj.text 
    textContainer.append(textField)

    textScreen.append(textContainer)

        return textScreen
  
}

//character plus avatar
function buildCharacterTextFieldWithAvatar (obj) {
const textScreen = document.createElement("div")
   textScreen.classList.add("screen")
   textScreen.addEventListener("click", nextScreen)
 const imgContainer = document.createElement("div")
        imgContainer.classList.add("characters")

        const avatar = localStorage.getItem("avatar")
        console.log(avatar)
        const imgElement = document.createElement("img")
        imgElement.src = avatar
        imgElement.classList.add("character")
        imgElement.classList.add("left")
        imgContainer.append(imgElement)
        imgContainer.append(imgElement)
        
        

        
        if (obj.img) {
        const imgElement = document.createElement("img")
        imgElement.src = obj.img
        imgElement.classList.add("character")
        imgElement.classList.add("right")
        imgContainer.append(imgElement)

        }
        
        textScreen.append(imgContainer)
const textContainer = document.createElement("div")
    textContainer.classList.add("dialogue-box")
 const textField = document.createElement("div")
    textField.classList.add("dialogue-text")
    textField.innerHTML = obj.text 
    textContainer.append(textField)

    textScreen.append(textContainer)

        return textScreen
  
}

async function getCharacters(charArray) {

const charData = []

 try {
    const response = await fetch("data/characters.json");

    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }

    const data = await response.json();
    
    for (let i = 0; i < charArray.length; i++) {
      
      if (data[charArray[i]]) {
        charData.push(data[charArray[i]])
      }
      
    }
    return charData
  } catch (error) {
    console.error("Error loading data:", error);
    return null;
  }

}

function submitField (text) {

  const container = document.createElement("div")
  container.classList.add("screen")

  choice = document.createElement("div")
  choice.classList.add("choice-container")

  const textContainer = document.createElement("div")
  textContainer.innerHTML = text
  textContainer.classList.add("choice-text")
  choice.append(textContainer)

  const submit = document.createElement("input")
  submit.type = "text"
  submit.required
  submit.placeholder = "Напиши имя подозреваемого"
  submit.classList.add("submit_field")
  submit.id = "sbmt"

  choice.append(submit)

  const btn = document.createElement("button")
  btn.classList.add("submit-btn")
  btn.addEventListener("click", nextScreen)
  btn.innerHTML = "Проверить"

  choice.append(btn)
  container.append(choice)
  return container

}

function buildLastScreen (charObj ) {


const container = document.createElement("div")
container.classList.add("screen")




const charField= document.createElement("div")
charField.classList.add("reveal-container")

const textContainer = document.createElement("div")
  textContainer.innerHTML = charObj.text
  textContainer.classList.add("murderer-name")
  charField.append(textContainer)

const imgContainer = document.createElement("div")
imgContainer.classList.add("murderer-image")
const img = document.createElement("img")
img.src = charObj.img
img.alt = charObj.name
imgContainer.append(img)
charField.append(imgContainer)

const charName = document.createElement("div")
charName.classList.add("murderer-name")
charName.innerHTML = charObj.name

const charInfo = document.createElement("div")
charInfo.classList.add("murderer-description")
charInfo.innerHTML = charObj.description


charInfo.append(charName)

charField.append(charInfo)

 const btn = document.createElement("button")
  btn.classList.add("next-button")

  if (charObj.one_more) {
    btn.addEventListener("click", nextScreen)
    btn.innerHTML = "Погодите, это еще не все"
  } else  {
    btn.addEventListener("click", nextChapter)
 btn.innerHTML = "К следующей главе"
  }
  
 

  charField.append(btn)

container.append(charField)



return container



}




function nextScreen() {
   console.log(index)
  const containerChildren = container.children
 
  containerChildren[index].classList.remove("active")
  index++
  if (containerChildren[index]) {
    containerChildren[index].classList.add("active")
  } 
  
  
}

function nextChapter() {

 current_chapter++

 if (current_chapter < 5) {
 const nextChapter = `chapter-${current_chapter}.html`
 console.log(nextChapter)
 window.location.href = nextChapter
} else {
  window.location.href = "/index.html"
}


}

async function loadTheText(num) {
  const chapter = `chapter_${num}`
  console.log(chapter)
  const array = await getChapterData(chapter);
  current_chapter = num

  for (let i = 0; i < array.length; i++) {
    
   
   
   
  
   

    switch (array[i].type) {

      case "button":
        var btnContainer = createButtonScreen(array[i])
        container.append(btnContainer)
        break;
        case "title":

      var screen = createChapterName(array[i])
      container.append(screen)
        break;
      case "character_text":
        var charPanel = buildCharacterTextField(array[i])
        container.append(charPanel)
        break;

      case "character_text_var":
        var imTired = buildCharacterTextFieldWithAvatar(array[i])
        container.append(imTired)
        break;
      case "characters":

        const charArray = await getCharacters(array[i].characters)
      
        for (let i = 0; i < charArray.length; i++) {
         
        var newCharacter =  buildCharacterPage(charArray[i])

          container.append(newCharacter)
        
        }

      break;      

      case "choice":

      var choiceContainer = submitField(array[i].text)
      container.append(choiceContainer)
      break;

      case "text":
      
      var textContainer = buildTextField(array[i].text)
      container.append(textContainer)
      break;

      case "murder-chapter":
        
        var lastScreen = buildLastScreen(array[i])
        container.append(lastScreen)

      default:
        break;

    }


   

    
    
  }
 container.children[0].classList.add("active")
  
 
}

    

// loadTheText("chapter_1")


let selectedCard = null;

  function selectAvatar(card) {
    if (selectedCard) {
      selectedCard.classList.remove("selected");
    }

    selectedCard = card;
    selectedCard.classList.add("selected");
  }

  function confirmSelection() {
    if (!selectedCard) {
      alert("Пожалуйста, выбери бойца, тебе что, жалко?");
      return;
    }

    const avatar = selectedCard.querySelector("img").src;
    
     
     localStorage.setItem("avatar", avatar);

     console.log(localStorage.getItem("avatar"))
      window.location.href = "chapter-1.html";
  }

