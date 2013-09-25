function createTimer() {
  return {
    start: function() {
      this.startTime = Date.now();
    }
  };
}
