class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
  }
  repeat() {
    let step = this.index % 8;
  }
  start() {
    setIntervall(() => {
      this.repeat();
    });
  }
}
