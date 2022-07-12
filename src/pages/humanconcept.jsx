import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';


export default function Humanconcept() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container}>
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/600962891?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={640} height={800} title={1}/></div>
                    <Fragment><img className={classes.imgs} src={require('../imgs/hc/hc1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/hc/hc2.png')} alt='2'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}