import { useState } from "react";

const TukiChild = () => {

    const [count, setCount] = useState (0);       //seter function. useState es un hook controla estado declarado como array de dos posiciones el primero es el estado del componente y la segunda tiene una funcion seter. que hace el use state muestr ael valor inicial

    console.log ("count", count);
    console.log("TukiChild");

    const incrementar = () => {
        console.log ("Ahora funciona");
        setCount (count+1);
    };

    return (
        <div>

        <h1> Tuki Child </h1>
        <h2> Soy hijo de TukiComponents y nieto de App</h2>

        <h3> Contador: {count}</h3>

        <button onClick={incrementar}>Click me!</button>

        </div>
    )
}

export default TukiChild;