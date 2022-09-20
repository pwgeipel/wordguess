
var startBTN = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')


var words = ['pretzel', 'macarons', 'croissant', 'javascript', 'variable', 'python']
var words = 
// score variable
// time remaining variable


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
    word = words[randomIndex]
    renderCharacters()
}

startBTN.addEventListener("click", startRound)

               