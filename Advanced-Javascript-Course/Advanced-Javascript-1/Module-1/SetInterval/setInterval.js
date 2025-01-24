/*
Challenge:
1. Every 1000 milliseconds, log out:
    `Your device will shut down in ${secondsRemaining} seconds`.
    Decrement 'secondsRemaining'.
2. When 'secondsRemaining' hits zero, you should log out
    `Your device is shutting down`.
    At this point, the setInterval should be cleared. What method
    can you use to do that? (We used clearTimeout to cancel setTimeout.)
*/
function startCountdown(device) {
  let secondsRemaining = 3;

//   use params won't work with inlines functions
  const shutdownTimer = setInterval(function () {
    if (secondsRemaining > 0) {
      console.log(`Your ${device} will shut down in ${secondsRemaining} seconds.`);
      secondsRemaining--;
    } else {
      console.log('Your device is shutting down.');
      clearInterval(shutdownTimer);
    }
  }, 1000);
}
+
startCountdown('MacBook');
