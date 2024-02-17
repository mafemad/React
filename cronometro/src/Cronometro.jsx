import React, {useState, useRef, useEffect} from "react";

function Cronometro(){

    const [rodando, setRodando] = useState(false);
    const [tempoPassado, setTempoPassado] = useState(0);

    const intervaloIdRef = useRef(null);
    
    const tempoInicioRef = useRef(0);

    useEffect(() => {

        if(rodando){
            intervaloIdRef.current = setInterval(() =>{
                setTempoPassado(Date.now() - tempoInicioRef.current);
            } ,10);
        }

        return() => {
            clearInterval(intervaloIdRef.current);
        }

    }, [rodando]);


    function iniciar(){

        setRodando(true);
        tempoInicioRef.current = Date.now() - tempoPassado;
    }

    function parar(){

        setRodando(false);

    }

    function reiniciar(){
        
        setRodando(false);
        setTempoPassado(0);
    }

    function formatar(){

        let horas = String(Math.floor(tempoPassado / 1000 * 60 * 60)).padStart(2,"0");
        let minutos = String(Math.floor(tempoPassado / (1000 * 60) % 60)).padStart(2,"0");
        let segundos = String(Math.floor(tempoPassado / (1000) % 60)).padStart(2,"0");
        let milisegundos = String(Math.floor((tempoPassado % 1000) / 10)).padStart(2,"0");



        return `${minutos}:${segundos}:${milisegundos}`
    }


    return(

        <div className="cronometro">
            <div className="display">{formatar()}</div>
            <div className="controles">
                <button onClick={iniciar} className="botao-iniciar">Iniciar</button>
                <button onClick={parar} className="botao-parar">Parar</button>
                <button onClick={reiniciar} className="botao-reiniciar">Reiniciar</button>
            </div>
        </div>
    
    )
}

export default Cronometro;