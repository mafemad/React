import React, {useState} from "react";

function Seletor(){
    
    const [cor, setCor] = useState("#FFFFFF");

    function handleColorChange(event){
        
        setCor(event.target.value);

    }

    return(
        <div className="container">
            <h1>Seletor de cores</h1>
            <div className="display" style={{backgroundColor : cor}}>
                <p>Cor selecionada {cor}</p>

            </div>
            <label>Selecione a cor </label>
            <input type="color" value={cor} onChange={handleColorChange} />

        </div>
    )

    
}

export default Seletor;