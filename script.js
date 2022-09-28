
const kits = ["snare", "kick", "crash", "tom"]
const containerEl = document.querySelector('.container');

kits.forEach((ket) => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('btn');
    containerEl.appendChild(buttonEl)
    buttonEl.innerText = ket;
    buttonEl.style.backgroundImage =
        "url(img/" + ket + ".png)";
    const audioEl = document.createElement('audio')
    audioEl.src = "sound/" + ket + '.mp3'
    containerEl.appendChild(audioEl);

    buttonEl.addEventListener('click', () => {
        audioEl.play()
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === ket.slice(0, 1)) {
            audioEl.play();
            buttonEl.style.transform = 'scale(.9)';
            setTimeout(() => {
                buttonEl.style.transform = 'scale(1)';
            }, 100)
        }
    })

})

