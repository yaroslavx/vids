import React from 'react';
import { Link } from "react-router-dom";
import classes from '../styles/hudComponent.module.css'

export default function HudComponent(props) {
    return (
        <div className={classes.hudComponent}>
            <div className={classes.dropdiv}>
                <Link className={classes.lnk} to='/'>/vids</Link>
            </div>
            <div className={classes.dropdownContent}>
                <div><Link className={classes.lnk} to='/jackboys'>JACKBOYS</Link></div>
                <div><Link className={classes.lnk} to='/cashincashout'>Cash In Cash Out</Link></div>
                <div><Link className={classes.lnk} to='/escapeplan'>ESCAPE PLAN</Link></div>
                <div><Link className={classes.lnk} to='/familyties'>family ties</Link></div>
                <div><Link className={classes.lnk} to='/kidsturnedoutfine'>KIDS TURNED OUT FINE</Link></div>
                <div><Link className={classes.lnk} to='/klarna'>A$AP ROCKY x KLARNA</Link></div>
                <div><Link className={classes.lnk} to='/duragactivity'>durag activity</Link></div>
                <div><Link className={classes.lnk} to='/nigo'>Virgil Abloh x Nigo</Link></div>
                <div><Link className={classes.lnk} to='/yeezus'>Yeezus / Brooklyn</Link></div>
                <div><Link className={classes.lnk} to='/humanconcept'>Human Concept</Link></div>
                <div><Link className={classes.lnk} to='/floorseats'>A$AP Ferg x Redline</Link></div>
                <div><Link className={classes.lnk} to='/af'>Travis Scott x AF1</Link></div>
                <div><Link className={classes.lnk} to='/pacsun'>A$AP ROCKY x PACSUN</Link></div>
                <div><Link className={classes.lnk} to='/alwaysyams'>Always Yams</Link></div>
            </div>
        </div>
    )
}