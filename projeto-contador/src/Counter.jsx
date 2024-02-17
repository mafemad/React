import React, {useState} from "react";


function Counter(){

    const [contador, setContador] = useState(0);

    const aumentar = () => {

        setContador(contador + 1);
    
    }

    const resetar = () => {
        
        setContador(0);

    }

    const reduzir = () => {

        setContador(contador - 1);

    }

    return(
        <div className="container">
            
            <p className="display">{contador}</p>
            <button className="btn" onClick={reduzir}>Reduzir</button>
            <button className="btn" onClick={resetar}>Resetar</button>
            <button className="btn" onClick={aumentar}>Aumentar</button>

        </div>
    );
}

export default Counter;