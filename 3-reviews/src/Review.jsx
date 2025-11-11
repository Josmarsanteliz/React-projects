
import { useState } from 'react';
import people from './data';
import './index.css'



const Review = () => {
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];
    //check
    const checkNumber = (number) => {
        //ultima posicion
        const ultimaPosicion = people.length - 1;
        if (number > ultimaPosicion) {
            return 0;
        }
        if (number < 0) {
            return ultimaPosicion
        }
        return number
    }
    //siguiente

    const nextPerson = () => {
        setIndex((currentIndex) => {
            let newIndex = currentIndex + 1;
            return checkNumber(newIndex)
        })
    }
    //atras
    const prevPerson = () => {
        setIndex((currentIndex) => {
            let newIndex = currentIndex - 1;
            return checkNumber(newIndex)
        })
    }

    //random
    const randomNumber = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === randomNumber) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
    }
   
  return <article className='review'>
    <div className="img-container">
        <img src={image} alt={name} className='person-img' />
    </div>
    <h4>{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
        <button className='prev-btn' onClick={()=> prevPerson()}>
                    &lt; {/* o usar FaChevronLeft */}
                </button>
                <button className='next-btn' onClick={()=> nextPerson()}>
                    &gt; {/* o usar FaChevronRight */}
                </button>
    </div>
    <button className='random-btn' onClick={()=> randomNumber()}>
                surprise me
            </button>
  </article>
};

export default Review;