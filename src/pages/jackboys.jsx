import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';


export default function Jackboys() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container}>
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/554490060?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={540} title={1}/></div>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb3.png')} alt='3'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb4.png')} alt='4'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb5.png')} alt='5'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb6.png')} alt='6'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb7.png')} alt='7'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb8.png')} alt='8'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb9.png')} alt='9'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb10.png')} alt='10'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb11.png')} alt='11'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb12.png')} alt='12'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb13.png')} alt='13'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb14.png')} alt='14'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb15.png')} alt='15'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb16.png')} alt='16'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb17.png')} alt='17'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb18.png')} alt='18'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb19.png')} alt='19'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb20.png')} alt='20'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/jb/jb21.png')} alt='21'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}