describe("Timer", function() {
  var timer, startTime;

  beforeEach(function() {
    timer = createTimer();
  });

  it("should record the start time when start is called", function() {
    startTime = timer.start();

    expect(timer.startTime).toBeDefined();
  });

  it("should not record the start time when start isn't called", function() {
    expect(timer.startTime).toBeUndefined();
  });


});