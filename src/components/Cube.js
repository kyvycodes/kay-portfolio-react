import React from 'react'
import styled from 'styled-components'

// BUG not animation not working. Back up - https://dev.to/samwatts98/how-to-easily-animate-your-react-components-on-click-with-css-keyframes-26mg

const CubeAnimation = styled.div`
:root{
  --boxColor:#04b7;
  --rotateSpeed: 30s;
  --bounceSpeed: 1.5s;
}

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


// p {
// text-align: center;
// font-size: 30px;
// }

.scene {
  position: relative;
  transform-style: preserve-3d;
  animation: sceneRotate var(--rotateSpeed) infinite linear;

  @keyframes sceneRotate {
      to { transform: rotateY(360deg);}
  }
}
.cube {
  overflow: hidden;
  perspective: 100em;
  perspective-origin: 50% calc(50% - 2em);
  position: absolute;
  width: 20em;
  height: 20em;
  bottom: -10em;
  left: -10em;
  transform-style: preserve-3d;
  // animation: cubeHeight var(--bounceSpeed) infinite ease-out;

  @keyframes cubeHeight {
      0%, 100% { height: 1.5em;}
      8%, 93.5% { height: 2em;}
  }

  .left, .right, .front, .back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--boxColor);
      box-shadow: 0 0 0.5em #000a inset;
  }
  .front{ transform: translateZ(1em);}
  .right{ transform: rotateY(90deg) translateZ(1em);}
  .back{ transform: rotateY(180deg) translateZ(1em);}
  .left{ transform: rotateY(270deg) translateZ(1em);}

  .top{
      position: absolute;
      width: 2em;
      height: 2em;
      background:var(--boxColor);
      box-shadow: 0 0 0.5em #000a inset;
      transform: translateY(-50%) rotateX(90deg);
  }

  .bottom{
      position: absolute;
      width: 2em;
      height: 2em;
      background: var(--boxColor);
      box-shadow: 0 0 0.5em #000;
      bottom: 0;
      transform: translateY(50%) rotateX(90deg);
  }
}
`

export default function Cube() {
  return (
    <CubeAnimation>
      <div className="scene">
         <div className="floor"></div>
            <div className="cube" id="cube">
                <div className="front">
                    <p>Front-end</p>
                </div>
            <div className="back">
                  <p>Fullstack</p>
            </div>
            <div className="left">
              <p>Teacher</p>
              </div>
            <div className="right">
              <p>Listener</p>
              </div>
            <div className="top">
                 <p>Developer</p>
            </div>
            <div className="bottom"></div>
        </div>
      </div>
    </CubeAnimation>
  )
}
