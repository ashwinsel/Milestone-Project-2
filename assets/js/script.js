// Get the modals
var howToPlay = document.getElementById("instructions");
var musicToggle = document.getElementById("musicOnOff");
var resetGame = document.getElementById("gameReset");

// Get the buttons that open the modals
var htp = document.querySelectorAll(".btn")[0];
var mT = document.querySelectorAll(".btn")[1];
var rG = document.querySelectorAll(".btn")[2];

// Get the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// When the user clicks the buttons, open the corresponding modal
htp.onclick = function() {
    howToPlay.style.display = "block";
}
mT.onclick = function() {
    mT.classList.add("strike");
} 
rG.onclick = function() {
    resetGame.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        howToPlay.style.display = "none";
        if((document.querySelectorAll == 'btn.strike')[i] === 'button.btn.strike') {
            mT.onclick = function() {
                mT.classList.remove("strike");
            }; /*how to target if Music toggle button is striked through? */

        };

        resetGame.style.display = "none";
    }
}

 


// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
    if (event.target == howToPlay) {
        howToPlay.style.display = "none";        
    }
}