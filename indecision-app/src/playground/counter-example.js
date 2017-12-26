let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={addOne}>Plus One</button>
      <button onClick={minusOne}>Minus One</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
