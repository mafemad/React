import React, {useState, useEffect} from "react";

function Relogio(){

    const [time, setTime] = useState(new Date());

    useEffect(() =>{

        const intervalId = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    function formatTime(){
        let horas = time.getHours();
        const minutos = time.getMinutes();
        const segundos = time.getSeconds();
        const meioDia = horas >= 12 ? "PM" : "AM";

        horas = horas % 12 || 12;

        return `${padZero(horas)}:${padZero(minutos)}:${padZero(segundos)} ${meioDia}`;
    }

    function padZero(number){

        return (number < 10 ? "0" : "") + number;

    }

    return(
        
        <div className="clock-container">
            <div className="clock">              
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default Relogio;