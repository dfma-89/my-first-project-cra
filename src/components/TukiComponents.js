import TukiChild from "./TukiChild";

const TukiComponents = () => {

    console.log ('TukiComponents');

//logica de componente map asincronismo

    return (   //retorna contenido que veo en el DOM
        <div>
            <h1>Tuki Components</h1>
            <TukiChild />

        </div>

    );
};

export default TukiComponents;