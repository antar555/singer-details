import React from 'react';
import './Singer.css';

const Singer = (props) => {
    // console.log(props);
    const {name, img,age,honorarium,dob,genre}=props.singer;
    return (
        <div className="ind-singer">
            <div className="information">
                <img src={img} alt="" />
                <h5><span>Name:</span> {name}</h5>
                <h5><span>Date of Birth:</span> {dob}</h5>
                <h5> <span>Genre:</span> {genre}</h5>
                <h5><span>Age:</span> {age}</h5>
                <h5><span>Honorarium: </span> {honorarium}</h5>
                
                <div className="button">
                <button onClick={()=>props.handleClick(props.singer)} className="btn-singer"> <i className="fas fa-music"></i> Add Singer</button> <br /> <br /> 
                <i className="fas fa-guitar"></i>
                <i className="fas fa-guitar"></i>
                <i className="fas fa-guitar"></i>
                <i className="fas fa-guitar"></i>
                <i className="fas fa-guitar"></i>
                <i className="fas fa-guitar"></i>

                </div>
                

            </div>
          
         

        </div>
    );
};

export default Singer;