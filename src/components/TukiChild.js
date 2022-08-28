import { useState } from "react";

const TukiChild = () => {
    
    //FIRST EXERCISE
    const [count, setCount] = useState (0);  //seter function. useState es un hook controla estado declarado como array de dos posiciones el primero es el estado del componente y la segunda tiene una funcion seter. que hace el use state muestr ael valor inicial
    //SECOND EXERCISE
    const [info, setInfo] = useState ({name: "Debo", age: 33});
    //THIRD EXERCISE
    const [loading, setLoading] = useState (false);
    //FOURTH EXERCISE
    const [animals, setAnimals] = useState (["Raccoon"]);
    
    console.log ("count", count);
    const incrementar = () => {
        setCount (count+1);
    };
    const decrementar = () => {
        setCount (count-1);
    }
    const resetear = () => {
        setCount (0);
    }

    //SECOND EXERCISE
    console.log("info", info);
    const cambiarNombre = () => {
        setInfo ({...info, name: "Deborah", lastname:'Medina Alvarado'});   
    }

    //THIRD EXERCISE
    console.log ("Loading", loading);
    const changeLoading = () => {
        setLoading (current => !current);
    }

    //FOURTH EXERCISE
    const animalesNuevos = ['Dog', 'Cat', 'Cow', 'Mouse', 'Pig'];
    console.log ("First Animal", animals);
    const addAnimals = () => {
        setAnimals (animals.concat (animalesNuevos));
    }
        
    return (
        <div>

        <h1> Tuki Child </h1>

        <h3> Contador: {count}</h3>
        <button className="btn btn-success" onClick={incrementar}>Click me to increase!</button>
        <br />
        <br />
        <button className="btn btn-warning" onClick={decrementar}>Click me to decrease!</button>
        <br />
        <br />
        <button className="btn btn-success" onClick={resetear}>Click me to reset!</button>
        <br />
        <br />
        <h3> Nombre: {info.name}</h3>
        <h3> Edad: {info.age}</h3>
        <h3>Apellido: {info.lastname}</h3>     
        <button className="btn btn-warning" onClick={cambiarNombre}>Change info</button>
        <br />
        <br />
        <h3>Cambia tu estado</h3>
        <button className="btn btn-success" onClick={changeLoading}>Change state</button>
        <br />
        <br />
        <h3>Agregando animales</h3>
        <button className="btn btn-success" onClick={addAnimals}>Add animals</button>

        </div>
    )
}

export default TukiChild;