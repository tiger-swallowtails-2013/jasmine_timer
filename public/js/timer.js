function createTimer() {
  return {
    start: function() {
      this.startTime = Date.now();
    },
    duration: function() {
      return Date.now() - this.startTime();
    }
  };
}
