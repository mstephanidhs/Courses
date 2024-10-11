export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchTimesAPI(today) };
};

export const fetchTimesAPI = (date) => {
  const times = [];

  for (let i = 17; i <= 23; i++) {
    if (Math.random() < 0.5) times.push(i + ':00');
    else times.push(i + ':30');
  }

  return times;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {
        times: fetchTimesAPI(action.date),
      };
  }
};
