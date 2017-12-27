let visibility = true;

const hideDetails = () => {
visibility = false;
  render();
};

const showDetails = () => {
visibility = true;
  render();
};




const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      {visibility ? <button onClick={hideDetails}>Hide Details</button> : <button onClick={showDetails}>Show Details</button>}
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

render();
