class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
      timerOver: document.querySelector('[data-value="over"]'),
    };
  }
  dateTimer() {
    setInterval(() => {
      const endDate = this.targetDate.getTime();

      let nowTime = Date.now();
      let time = endDate - nowTime;

      if (time > 0) {
        const day = Math.floor(time / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.secs.textContent = sec;
        this.refs.mins.textContent = min;
        this.refs.hours.textContent = hour;
        this.refs.days.textContent = day;
      } else {
        this.refs.timerOver.textContent = `Timer is over`;
      }
    }, 1000);
  }
}

const start = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

start.dateTimer();
