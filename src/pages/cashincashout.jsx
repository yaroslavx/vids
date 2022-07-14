import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';
import SlideButton from '../components/UI/buttons/slideButton';


export default function Cico() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container} id="vidContainer">
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/719182720?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={540} title={1}/></div>
                    <SlideButton/>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico3.png')} alt='3'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico4.png')} alt='4'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico5.png')} alt='5'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico6.png')} alt='6'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico7.png')} alt='7'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico8.png')} alt='8'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico9.png')} alt='9'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico10.png')} alt='10'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico11.png')} alt='11'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico12.png')} alt='12'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico13.png')} alt='13'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico14.png')} alt='14'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico15.png')} alt='15'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico16.png')} alt='16'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/cico/cico17.png')} alt='17'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}