import React from 'react'
import trxjo from "./videos/ROSAY HOME COVER VIDEO.mp4";

const Video = () => {
    return (
        <div className= "video">
            <video width="100%" src={trxjo} autoplay="true" loop="true" muted="true"/>
        </div>
    )
}
//
export default Video
