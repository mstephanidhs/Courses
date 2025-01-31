function handleResize(e) {
  console.log('resize happened on event: ' + e);
}

function throttle(func, delay) {
  let throttleTimeout = null;
  return function () {
    if (!throttleTimeout) {
      func.apply(this, arguments);
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
    }
  };
}
const throttledHandleResize = throttle(handleResize, 1000);
window.addEventListener('resize', throttledHandleResize);
