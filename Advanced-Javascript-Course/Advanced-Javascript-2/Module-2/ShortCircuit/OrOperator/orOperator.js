const jobHunter = {
  name: 'Tom Chant',
  jobSearchArea: 'Europe',
};

// The || operator returns the first truthy operand, or the
// last falsy operand if all operands are falsy.
const workLocation = jobHunter.jobSearchArea || 'Worldwide';

/***** if else *****/
if (jobHunter.jobSearchArea) {
  console.log(
    `${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`
  );
} else {
  console.log(`${jobHunter.name}'s work location is Worldwide`);
}

/***** ternary *****/
// const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide'
// console.log(`${jobHunter.name}'s work location is ${workLocation}`)
