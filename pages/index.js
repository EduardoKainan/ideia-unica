import {useState} from 'react';


function home(){
 return(

    <div>
        <h1>Chrystian Pão de Queijo</h1>
        <h2>Construir essa pagina usando o Next.js</h2>
        <h3>E fiz o deploy usando a Versel, para hospendar o site de graça</h3>


        <Contador/>
    </div>

    )
}
function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>

        </div>

    )
}

export default home