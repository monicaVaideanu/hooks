import React, { useState, useEffect } from 'react';
import logo from "./logodevmind.png";

const WellcomeMessage = (props) => {
    const[wellcomeMessage, setValue] = useState('Please wait...'); //setare valoare intialia

    useEffect(() => {
        //dupa trecerea celor 3 secunde mesajul devin welcome to devmind
        setTimeout(()=>{
            const wellcomeMessage = setValue( 'Welcome to Devmind!');
        },3000);
      });

    return (
        <div>
            <h1 >{wellcomeMessage}
            </h1>
            <img src ={logo} width={350} height={90}/>
        </div>
    );
}
export default WellcomeMessage;