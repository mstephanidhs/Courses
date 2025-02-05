function outerFuntion(param) {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(param);
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFuntion('I am an argument');

closure();
