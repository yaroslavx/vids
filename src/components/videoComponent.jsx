import React, { Fragment } from 'react';
import classes from '../styles/videoComponent.module.css'
import Iframe from 'react-iframe'

export default function VideoComponent(props) {
    return (
        <Fragment>
            <Iframe 
            title={props.title} 
            className={classes.vid} 
            src={props.src}
            width={props.width}
            height={props.height}
            frameBorder={0} 
            webkitAllowFullScreen={''}
            allowFullScreen={''} 
            dataReady={true}
            allow={'autoplay'}
            ></Iframe>
        </Fragment>
    )
}
