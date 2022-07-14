import React, { Fragment } from 'react';
import classes from '../styles/Pages.module.css'
import HudComponent from '../components/hudComponent';
import VideoComponentWithHud from '../components/videoComponentWithHud';
import SlideButton from '../components/UI/buttons/slideButton';


export default function Klarna() {
    return (
        <Fragment>
            <div className={classes.hud}><HudComponent/></div>
            <div className={classes.page}>
                <div className={classes.container} id="vidContainer">
                    <div className={classes.vid} ><VideoComponentWithHud src={"https://player.vimeo.com/video/562682814?title=0&byline=0&portrait=0&transparent=0&autoplay=1"} width={960} height={668} title={1}/></div>
                    <SlideButton/>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn1.png')} alt='1'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn2.png')} alt='2'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn3.png')} alt='3'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn4.png')} alt='4'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn5.png')} alt='5'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn6.png')} alt='6'/></Fragment>
                    <Fragment><img className={classes.imgs} src={require('../imgs/klrn/klrn7.png')} alt='7'/></Fragment>
                </div>
            </div>
        </Fragment>
    )
}