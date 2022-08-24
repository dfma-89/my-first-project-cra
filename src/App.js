//arriba del componente van los IMPORTS.
//en el medio, delcaramos el componente funcional con lo que debe renderizar y la logica
//abajo del componente van los exports.

import TukiComponents from "./components/TukiComponents";

const App = () => {
    console.log("App");
  return (   //renderizo el componente
    <div className="App">
      <h1>MI PRIMER APP EN REACT</h1>

      <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo electrónico" />
                    <small id="emailHelp" className="form-text text-muted">No se compartirá la información.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"> Contraseña </label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Salir</label>
                </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

      <TukiComponents />
    </div>
  );
}

export default App;

//expor default exporta el componente app para usarlo en otro archivo. en ese otro archivo se puede importar con el nombre app o le puedo poner un alias. (ponerle otro nmbre)
//export exporta una variable o una funcion. el componente para usarlo en otr archivo y debo invocarlo con el mismo nombre que en el export y llamarlo entre llaves.

