import React from 'react'
import pic7 from "./images/costarica house.jpg";

const Links = () => {
    return (
        <div className="gallerylink">
            <a href='https://www.instagram.com/p/CYDt7XmjPZK/'>
                <button className="gallerybutton">
                    <img className= "pic7" src={pic7} width="100px"/>
                    <div className= "linkTitle">
                        <p1>COSTA RICA</p1>
                    </div>
                    <div className="linkText">
                        <p1>Costa Rica's strikingly diverse terrain – lush forests, wildlife reserves, and tropical beaches – offers a little something for every traveler.</p1>
                    </div>
                </button>
            </a>
        </div>
    )
}
/*
    Beach lovers staying along the Pacific Coast surf over here!
    
    <form action="https://google.com">
        <input type="submit" value="Go to Google" />
    </form>
*/
export default Links
