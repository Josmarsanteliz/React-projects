import React, {useState } from 'react';
//import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
    const [estado,setEstado] = useState(false)
    const showInfo = () => {
        setEstado(!estado)
        
    } 
  return <article className='question'>
    <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=> showInfo()}>{estado ? '-' : '+'}</button>
    </header>
        <p>{estado ? info : ''} </p>
    </article>;
};

export default Question;