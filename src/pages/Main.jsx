import React from 'react';
import { useState } from 'react';
import VideoComponent from '../components/videoComponent';
import '../styles/style.css'
import { Link } from "react-router-dom";

export default function Main() {
  const useMove = () => {
    const [state, setState] = useState({x: 0, y: 0})
    const handleMouseMove = e => {
      setState(state => ({...state, x: e.clientX, y: e.clientY}))
      let canvas = document.querySelector('.canvas');
      canvas.style.transform = `translate(-${x}px, -${y * 2}px)`
    }
    
    return {
      x: state.x,
      y: state.y,
      handleMouseMove,
    }
  }

  const {x, y, handleMouseMove} = useMove()

  window.onmousemove = handleMouseMove

  return (
    <div className="App">
      <body>
        <div className='container'>
          <div className='canvas'>
            <div>
              <Link to='/jackboys'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/554490060?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'jackboys'}/></div></Link>
              <Link to='/familyties'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/654595159?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'familyties'}/></div></Link>            
              <Link to='/humanconcept'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/600962891?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={800} title={'humanconcept'}/></div></Link>     
              <Link to='/yeezus'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/79986017?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'yeezus'}/></div></Link>                
            </div>
            <div>
              <Link to='/escapeplan'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/713487590?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={480} title={'escapeplan'}/></div></Link>   
              <Link to='/klarna'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/562682814?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={445} title={'klarna'}/></div></Link>   
              <Link to='/cashincashout'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/719182720?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'cashincashout'}/></div></Link>   
              <Link to='/nigo'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/658946686?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'nigo'}/></div></Link>   
              <Link to='/pacsun'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/576476046?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'pacsun'}/></div></Link>   
            </div>
            <div>
              <Link to='/kidsturnedoutfine'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/316967796?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'kidsturnedoutfine'}/></div></Link> 
              <Link to='/duragactivity'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/545654044?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'duragactivity'}/></div></Link> 
              <Link to='/af'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/374286671?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={394} title={'af'}/></div></Link>   
              <Link to='/floorseats'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/348991137?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={393} title={'floorseats'}/></div></Link>   
              <Link to='/alwaysyams'><div className='video'><VideoComponent src={"https://player.vimeo.com/video/448089761?title=0&byline=0&portrait=0&transparent=0&autoplay=1&autopause=false&background=1"} width={640} height={360} title={'alwaysyams'}/></div></Link>   
            </div>
          </div>
        </div>
      </body>  
    </div>
  );
}