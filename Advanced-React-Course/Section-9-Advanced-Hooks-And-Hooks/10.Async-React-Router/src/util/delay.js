const delay = (data, interval) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, interval);
  });
};

export default delay;
