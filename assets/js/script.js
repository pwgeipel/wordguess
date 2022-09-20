
var startBTN = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var validChars = "abcdefghijklmnopqrstuvwxyz"

var words = ['pretzel', 'macarons', 'croissant', 'javascript', 'variable', 'python']
var word = 
// score variable
// time remaining variable

function handleKeydown(event) {
    if (validChars.includes(event.key)) {

    }
}
// reset thje word-blanks - an _ for each letter of the new word
function renderCharacters() {
    var str = ""
    for (var i = 0; i < word.length; i++) {
        str += "_ "
        console.log(str)
    }
}
wordBlanksEl.textContent = str.trim()

function startRound() {
    var randomindex = Math.floor(Math.random() * words.length)
    word = words[randomindex]
    renderCharacters()
}

startBTN.addEventListener("click", startRound)

     document.addEventListener('keydown', handleKeydown)          