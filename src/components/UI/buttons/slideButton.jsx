import React from "react";
import cl from './slideButton.module.css'

export default function SlideButton({callback}) {
    return(
        <div className={cl.slidebutton} onClick={() => (document.getElementById('vidContainer')).scrollBy(500,0)}>➞</div>
    )
}