describe("Timer", function() {
  var timer, startTime;

  it("should record the start time when start is called", function() {
    timer = new Timer;
    startTime = timer.start();

    expect(timer.startTime).toBeDefined();
  });


  it("should not have a start time when start is not called", function() {
    timer = new Timer;

    expect(timer.startTime).toBeUndefined();
  });
  xit("start call Date.now", function() { });
  xit("should record the end time when endTime is called", function() { });
  xit("end call Date.now", function() { });
  xit("should be able to calculate time", function() { });
});