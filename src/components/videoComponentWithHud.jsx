import React, { Fragment } from 'react';
import classes from '../styles/videoComponentWithHud.module.css'
import Iframe from 'react-iframe'

export default function VideoComponentWithHud(props) {
    return (
        <Fragment>
            <Iframe 
            title={props.title} 
            className={classes.vidWithHud} 
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