import React from 'react'
import pic1 from "./images/ANG04105.jpg";
import pic2 from "./images/coolvool-2.jpg";
import pic3 from "./images/DSC00382.jpg";
import pic4 from "./images/DSC02551.jpg";
import pic5 from "./images/ZZZ02000.jpg";
import pic6 from "./images/ZZZ02274.jpg";
const Table = () => {
    return (
        <div className= "row">
            <div class= "column">
                <img className= "pic2" src={pic2} width="50%"/>
                <img className= "pic1" src={pic1} width="50%"/>
            </div>
            <div class= "column">
                <img className= "pic3" src={pic3} width="100%"/>
            </div>
            <div class= "column">
                <img className= "pic4" src={pic4} width="100%"/>
            </div>
            <div class= "column">
                
                <img className= "pic5" src={pic5} width="50%"/>
                <img className= "pic6" src={pic6} width="50%"/>
            </div>
            
            
        </div>
    )
}
/*
            */
export default Table
