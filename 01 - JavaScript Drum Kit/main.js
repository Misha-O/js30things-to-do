const audioFile = document.querySelector("[data-file='audio']");
const keys = document.querySelectorAll("[data-role='key']");
const soundSrc = {
  a: "./sounds/clap.wav",
  s: "./sounds/hihat.wav",
  d: "./sounds/kick.wav",
  f: "./sounds/openhat.wav",
  g: "./sounds/boom.wav",
  h: "./sounds/ride.wav",
  j: "./sounds/snare.wav",
  k: "./sounds/tom.wav",
  l: "./sounds/tink.wav",
};
document.addEventListener("keydown", (e) => {
  const key = document.querySelector(`[data-key='${e.key}']`);
  const className = "playing";

  switch (e.key.toLowerCase()) {
    case "a":
      key.classList.add(className);
      changeAudioSrc(soundSrc.a);
      playAudio();
      break;
    case "s":
      key.classList.add(className);
      changeAudioSrc(soundSrc.s);
      playAudio();
      break;
    case "d":
      key.classList.add(className);
      changeAudioSrc(soundSrc.d);
      playAudio();
      break;
    case "f":
      key.classList.add(className);
      changeAudioSrc(soundSrc.f);
      playAudio();
      break;
    case "g":
      key.classList.add(className);
      changeAudioSrc(soundSrc.g);
      playAudio();
      break;
    case "h":
      key.classList.add(className);
      changeAudioSrc(soundSrc.h);
      playAudio();
      break;
    case "j":
      key.classList.add(className);
      changeAudioSrc(soundSrc.j);
      playAudio();
      break;
    case "k":
      key.classList.add(className);
      changeAudioSrc(soundSrc.k);
      playAudio();
      break;
    case "l":
      key.classList.add(className);
      changeAudioSrc(soundSrc.l);
      playAudio();
      break;
    default:
      if (!audioFile) {
        return;
      }
      break;
  }
  document.addEventListener("keyup", (e) => {
    keys.forEach((key) => {
      key.classList.remove(className);
    });
  });
});
function changeAudioSrc(src) {
  audioFile.removeAttribute("src", src);
  audioFile.setAttribute("src", src);
}
function playAudio() {
  audioFile.currentTime = 0;
  audioFile.play();
}
