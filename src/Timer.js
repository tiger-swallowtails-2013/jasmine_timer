function Timer() {
}

Timer.prototype.start = function() {
  this.startTime = Date.now();
};

Timer.prototype.end = function() {
  this.endTime = Date.now();
};