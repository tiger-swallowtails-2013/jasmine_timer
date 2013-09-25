describe("Timer", function() {
  var timer, startTime, endTime;

  beforeEach(function() {
    timer = new Timer;
  });

  it("should record the start time when start is called", function() {
    startTime = timer.start();

    expect(timer.startTime).toBeDefined();
  });

  it("should not have a start time when start is not called", function() {
    expect(timer.startTime).toBeUndefined();
  });

  it("should record the end time when endTime is called", function() {
    endTime = timer.end();

    expect(timer.endTime).toBeDefined();
  });

  it("should not have a start time when start is not called", function() {
    expect(timer.endTime).toBeUndefined();
  });

    expect(timer.startTime).toBeUndefined();
  });
  xit("start call Date.now", function() { });
  xit("should record the end time when endTime is called", function() { });
  xit("end call Date.now", function() { });
  xit("should be able to calculate time", function() { });
});