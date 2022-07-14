import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';


export default function AF() {
    const scrollRef = useHorizontalScroll()
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container} ref={scrollRef} style={{overflow: "auto" }}>
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/374286671?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={591} title={1}/></div>
                    <Fragment><img className={classes.imgs} src={require('../imgs/af/af1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/af/af2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/af/af3.png')} alt='3'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}
