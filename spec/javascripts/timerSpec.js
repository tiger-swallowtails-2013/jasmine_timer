describe("Timer", function() {
  var timer;

  beforeEach(function() {
    timer = createTimer();
  });

  it("should start a timer", function() {
    timer.start();

    expect(timer.startTime).toBeDefined();
  });

  it("should not have a start time if timer wasn't started", function() {
    expect(timer.startTime).toBeUndefined();
  });


});