var startBTN = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var scoreEL = document.querySelector('.score')
var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ['pretzel', 'macarons', 'croissant', 'javascript', 'variable', 'python']
var word  
var guessedCharacters = []
var score = 0
// time remaining variable

function checkWord() {
    var wordFromDOM = wordBlanksEl.textContent.split(' ').join('')
    if (word === wordFromDOM) {
        score++
        scoreEL.textContent = score
        startRound()
    }
}

function handleKeydown(event) {    
    console.log(event.key)
    if (validChars.includes(event.key)) {
        guessedCharacters.push(event.key)
        renderCharacters()

    } 
}
// reset thje word-blanks - an _ for each letter of the new word
function renderCharacters() {
    var str = ""
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]
        if(guessedCharacters.includes(letter)) {
            str += letter + ' '
        } else {
            
        
        str += "_ "
        }
    }
    console.log(str)
    wordBlanksEl.textContent = str.trim()
    checkWord()
}


function startRound() {
    guessedCharacters = []
    var randomindex = Math.floor(Math.random() * words.length)
    word = words[randomindex]
    renderCharacters()
}

startBTN.addEventListener("click", startRound)

document.addEventListener('keydown', handleKeydown)
