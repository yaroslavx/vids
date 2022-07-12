import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';


export default function Yeezus() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container}>
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/79986017?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={540} title={1}/></div>
                    <Fragment><img className={classes.imgs} src={require('../imgs/yzs/yzs1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/yzs/yzs2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/yzs/yzs3.png')} alt='3'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/yzs/yzs4.png')} alt='4'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/yzs/yzs5.png')} alt='5'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}