const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');
  const sounds = document.querySelectorAll('.sound-picker button');

  const timeDisplay = document.querySelector('.time-display');
  const timeselect = document.querySelectorAll('.time-select button');
  const outlineLen = outline.getTotalLength();

  let fakeDuration = 60;

  outline.style.strokeDasharray = outlineLen
  outline.style.strokeDashoffset = outlineLen


  //play sound
  play.addEventListener('click', () => {
    checkPlay(song)
  })
  //select time
  timeselect.forEach(option => {
    option.addEventListener('click', function () {
      fakeDuration = this.getAttribute('data-time')
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
    })
  })





  const checkPlay = song => {

    if (song.paused) {
      song.play()
      video.play()
      play.src = '/svg/pause.svg'
    } else {
      song.pause()
      video.pause()
      play.src = '/svg/play.svg'
    }
  }



}

app();