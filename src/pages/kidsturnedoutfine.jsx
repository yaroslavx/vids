import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';


export default function Kidsturnedoutfine() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container}>
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/316967796?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={540} title={1}/></div>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof3.png')} alt='3'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof4.png')} alt='4'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof5.png')} alt='5'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof6.png')} alt='6'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof7.png')} alt='7'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof8.png')} alt='8'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof9.png')} alt='9'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof10.png')} alt='10'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof11.png')} alt='11'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof12.png')} alt='12'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof14.png')} alt='14'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof15.png')} alt='15'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof16.png')} alt='16'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof17.png')} alt='17'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof18.png')} alt='18'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/ktof/ktof19.png')} alt='19'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}