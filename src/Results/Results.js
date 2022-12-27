import React from "react";

const mapResults = (resultlist) => {
  console.log("Ejecutado calculo de resultados");

  const total = resultlist.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = total / resultlist.length;

  return resultlist.map((elem, index) => {
    return <p key={index}>{elem} {elem >= average ? '🟢' : '🔴'} </p>
  });
}

const Results = () => {

  const [render, setRender] = React.useState(false);
  const [resultsNumber] = React.useState([2, 6, 5, 8, 1, 3, 10, 2]);
  const memoizedValue = React.useMemo(() => mapResults(resultsNumber), [resultsNumber]);

  return (
    <div className="results">
      {memoizedValue}

      <p>Valor actual: {render.toString()}</p>
      <button onClick={() => setRender(!render)}>Cambiar estado</button>
    </div>
  );
}

export default Results;