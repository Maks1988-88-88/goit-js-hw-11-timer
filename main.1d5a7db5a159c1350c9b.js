(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,r){},QfWi:function(e,t,r){"use strict";r.r(t);r("L1EO"),r("VA1H")},VA1H:function(e,t){new(function(){function e(e){var t=e.selector,r=e.targetDate;this.selector=t,this.targetDate=r,this.refs={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]'),timerOver:document.querySelector('[data-value="over"]')}}var t=e.prototype;return t.dateTimer=function(){var e=this;setInterval((function(){var t=e.targetDate.getTime()-Date.now();if(t>0){var r=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),n=Math.floor(t%6e4/1e3);e.updateTimer(e.refs.secs,n),e.updateTimer(e.refs.mins,o),e.updateTimer(e.refs.hours,a),e.updateTimer(e.refs.days,r)}else e.refs.timerOver.textContent="Timer is over"}),1e3)},t.updateTimer=function(e,t){e.textContent=t<=9?"0"+t:t},e}())({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")}).dateTimer()}},[["QfWi",1]]]);
//# sourceMappingURL=main.1d5a7db5a159c1350c9b.js.map