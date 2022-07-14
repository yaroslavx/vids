import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';
import SlideButton from '../components/UI/buttons/slideButton';


export default function Familyties() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container} id="vidContainer">
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/654595159?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={540} title={1}/></div>
                    <SlideButton/>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft3.png')} alt='3'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft4.png')} alt='4'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft5.png')} alt='5'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft6.png')} alt='6'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft7.png')} alt='7'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft8.png')} alt='8'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft9.png')} alt='9'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft10.png')} alt='10'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ft/ft11.png')} alt='11'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}