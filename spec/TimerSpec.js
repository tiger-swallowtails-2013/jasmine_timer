describe("Timer", function() {
  var timer, startTime, endTime;

  beforeEach(function() {
    timer = createTimer();
  });

  it("should record the start time when start is called", function() {
    startTime = timer.start();

    expect(timer.startTime).toBeDefined();
  });

  it("should not have a start time when start is not called", function() {
    expect(timer.startTime).toBeUndefined();
  });

  xit("should record the end time when endTime is called", function() {
    endTime = timer.end();

    expect(timer.endTime).toBeDefined();
  });

  it("should not have a start time when start is not called", function() {
    expect(timer.endTime).toBeUndefined();
  });

  xit("sets the start time to the current time", function() {
    spyOn(Date, 'now').andReturn(1234); //stub
    startTimer = timer.start();


    spyOn(Date, 'now').andReturn(1250); //stub
    expect(timer.duration()).toEqual(16);
  });
  xit("end call Date.now", function() { });
  xit("should be able to calculate time", function() { });
});
