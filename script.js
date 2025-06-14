document.addEventListener('keydown',(e)=>{
    const keyPressed = e.key
    console.log(keyPressed)
    const tune = new Audio(`./tunes/${keyPressed}.wav`)
    tune.play()
    const clickedButton = document.querySelector(`[data-key="${keyPressed}"]`)
    clickedButton.classList.add('active')
    setTimeout(()=>{
        clickedButton.classList.remove('active')
    },100)
})
