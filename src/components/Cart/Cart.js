import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.selectedSinger);
    const singers=props.selectedSinger;
    // console.log(singers);
    const{selectedSinger}=props;
    let total=0;
    for(const singer of selectedSinger ){
        total= total+singer.honorarium;
    }
   
    return (
        <div>
            <h3>Selected Singers: {selectedSinger.length}</h3>
            <h4>Total Cost: {total}</h4>

            {
                singers.map(singer=> <DisplayCart name={singer.name} img={singer.img}></DisplayCart>)
            }
            
        </div>
    );
};

const DisplayCart=(props)=>{
   return(
       <div className="displayCart">
            <img src={props.img} alt="" />
           <p>{props.name}</p>
          

       </div>
   )
}

export default Cart;