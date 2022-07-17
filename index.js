let drums = document.querySelectorAll(".drum")

drums.forEach((drum) => {
    drum.addEventListener("click", (event) => {
        playDrum(event.target.textContent)
    })
})


document.addEventListener("keyup", (event) => {
    playDrum(event.key)
})


function playDrum(key) {

    document.querySelector(`.${key}`).style.opacity = "0.5"

    setTimeout(() => {
        document.querySelector(`.${key}`).style.opacity = "1"
    }, 300);

    switch (key) {
        case 'w':
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case 'a':
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;

        case 's':
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;

        case 'd':
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;

        case 'j':
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case 'k':
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;

        case 'l':
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        default:
            break;
    }
}






// <button class="w drum">w</button>
//         <button class="a drum">a</button>
//         <button class="s drum">s</button>
//         <button class="d drum">d</button>
//         <button class="j drum">j</button>
//         <button class="k drum">k</button>
//         <button class="l drum">l</button>