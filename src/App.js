//arriba del componente van los IMPORTS.
//en el medio, delcaramos el componente funcional con lo que debe renderizar y la logica
//abajo del componente van los exports.

import TukiComponents from "./components/TukiComponents";

const App = () => {
  return (
    <div className="App">
      <h1>MI PRIMER APP EN REACT</h1>
      <TukiComponents />
    </div>
  );
}

export default App;

//expor default exporta el componente app para usarlo en otro archivo. en ese otro archivo se puede importar con el nombre app o le puedo poner un alias. (ponerle otro nmbre)
//export exporta una variable o una funcion. el componente para usarlo en otr archivo y debo invocarlo con el mismo nombre que en el export y llamarlo entre llaves.

