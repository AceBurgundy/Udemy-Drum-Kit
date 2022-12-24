let drums = document.querySelectorAll(".drum")
const context = new AudioContext()
let audioFiles = {}
let sound = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"]

drums.forEach((drum) => {
    drum.addEventListener("click", (event) => {
        playDrum(event.target.textContent)
    })
})

for (let index = 0; index < sound.length; index++) {

    fetch(`sounds/${sound[index]}.mp3`)
        .then(data => data.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {
            audioFiles[sound[index]] = decodedAudio
        })

}

function playSound(color) {
    const play = context.createBufferSource()
    play.buffer = audioFiles[color]
    play.connect(context.destination)
    play.start(context.currentTime)
}

document.addEventListener("keypress", (event) => {
    event.preventDefault();
    playDrum(event.key)
})


function playDrum(key) {

    if (document.querySelector(`.${key}`) != null) {

        document.querySelector(`.${key}`).style.opacity = "0.5"

        switch (key) {
            case 'w':
                playSound("crash")
                break;

            case 'a':
                playSound("kick-bass")
                break;

            case 's':
                playSound("snare")
                break;

            case 'd':
                playSound("tom-1")
                break;

            case 'j':
                playSound("tom-2")
                break;

            case 'k':
                playSound("tom-3")
                break;

            case 'l':
                playSound("tom-4")
                break;

            default:
                break;
        }

        setTimeout(() => {
            document.querySelector(`.${key}`).style.opacity = "1"
        }, 300);
    }
}

if (window.screen.availHeight > window.screen.availWidth) {
    document.querySelector(".set").classList.add("phone")
    document.querySelectorAll(".drum").forEach(drum => {
        drum.classList.add("phone")
    })

}