export default function playAudio(audio, volume = 1.0) {
    audio.volume = volume;
    audio.loop = true;
    audio.play();
  }