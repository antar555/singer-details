import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Singer from '../Singer/Singer';
import './Singers.css';

const Singers = () => {
    const [singers, setSingers]=useState([]);
    const[selectedSinger, setSelectedSinger]= useState([]);
    useEffect(()=>{
        fetch('./singers.JSON')
        .then(res=> res.json())
        .then(data=> setSingers(data));
    },[])

    const handleClick=(singer)=>{
        // console.log(singer);
        const newSinger=[...selectedSinger, singer];
        setSelectedSinger(newSinger);
    }

    return (
        <div className="singers-container">
           <div className="singer">
             
               {
                   singers.map(singer=> <Singer
                   key={singer.id}
                   singer={singer}
                   handleClick={handleClick}
                   
                   ></Singer>)
               }
           </div>
           <div className="selected-singer">
               <Cart selectedSinger={selectedSinger}></Cart>
             
               
           </div>
        </div>
    );
};

export default Singers;