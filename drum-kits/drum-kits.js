const kits = ["crash", "kick", "snare", "tom"];
const container  = document.querySelector(".icon")

kits.forEach(kit => {
    //using Js to create button element instead of html
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("btn");
    buttonEl.innerHTML = kit;
    buttonEl.style.backgroundImage = "url(" + kit + ".png)"
    container.appendChild(buttonEl)
    const soundEl = document.createElement("audio");
    soundEl.src = "sounds/" + kit + ".mp3";
    
    container.appendChild(soundEl);

    // playing the sound when the buttons are clicked
    buttonEl.addEventListener('click', () => {
        soundEl.play()

    });
//using first letters of the button to play the sounds
    window.addEventListener("keydown", (event) => {
        if(event.key === kit.charAt(0)) {
            soundEl.play();
            //making the buttons animate after pressing a key
            buttonEl.style.transform = "scale(.9)";
            // making the scale of the buttons return to normal after sometime
            setTimeout(() => {
                buttonEl.style.transform = "scale(1)"
            }, 100)
        }
       
    })

}
)