import ReactDOM from 'react-dom';
import styled from 'styled-components';
import lax from 'lax.js';
import { useLax, useLaxElement } from 'use-lax';

function IndexPage () {
  
  useLax();
  const ref = useLaxElement();

    return(
      <Main>  
        <Stars ref={ref} data-lax-bg-pos-x="0 0, 10000 -800 | loop=10000"/>
        <Planet ref={ref} data-lax-translate-x="0 0, 5000 (-vw-elw)" data-lax-sprite-data="382,382,15,5,10" />
        <Foreground ref={ref} data-lax-bg-pos-x="0 0, 7000 (-15*vh) | loop=7000" />
        <Mario ref={ref} data-lax-translate-x="0 -elw, 720 (vw+elw) | loop=720" data-lax-translate-y="0 0, 240 0, 300 -500, 420 0, 720 0 | loop=720" />
      </Main>
    );
}

const Main = styled.div`
  opacity: 1;
  transition: opacity 200ms;
`;

const Mario = styled.div`
  width: 256px;
  height: 256px;
  position: fixed;
  top: calc(70vh - 256px);
  background-color: red;
`;

const Stars = styled.div`
  width: 100vw;
  height: 70vh;
  background: yellow;
  background-size: 800px;
  position: fixed;
  opacity: 0.7;
  top: 0;
`;

const Planet = styled.div`
  width: 30vw;
  height: 30vw;
  position: fixed;
  left: 100vw;
  bottom: 29vh;
`;

const Foreground = styled.div`
  width: 100vw;
  height: 30vh;
  background: green;
  background-size: 15vh;
  position: fixed;
  top: 70vh;
`;

export default IndexPage;

// const Section = styled.section`
//   height: 100vh;
//   padding: 0 0 0 10vw;
// `;

// const IntroSection = styled(Section)(props => ({
//   background: props.background,
//   zIndex: 99, 
//   position: 'absolute',
//   top: 0,
//   // width: 'auto',
//   // display: 'flex', 
//   // alignContent: 'center',
//   // paddingTop: '10em',
//   '& p': {
//     textTransform: 'uppercase',
//     width: '100vw',
//     display: 'block',
//     margin: 'auto 0',
//     fontSize: '50vh',
//     textAlign: 'left',
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     textOverflow: 'clip',
//   }
// }));

// const AnimSection = styled(Section)(props => ({
//   background: '#1989A6',
//   padding: '12em',
//   height: 'calc(100vh - 12em)', 
//   overflow: 'hidden',
//   position: 'relative', 
//   '& h1': {
//     position: 'absolute',
//     fontSize: '10em',
//     margin: 0, 
//     textTransform: 'uppercase',
//     left: '15%', 
//     zIndex: 1,
//   },
//   '& p': {
//     position: 'absolute',
//     fontSize: '2em',
//     width: '40%',
//     zIndex: 1, 
//     top: 500
//   }, 
//   "& .box1": {
//     position: 'absolute',
//     width: '40%',
//     zIndex: 0, 
//     top: 0, 
//     left: '10%',
//     width: 800, 
//     height: 800, 
//     border: '30px solid #20A2C3',
//     overflow: 'hidden', 
//     transform: 'rotateZ(65deg)'
//   },
//   "& .box2": {
//     position: 'absolute',
//     width: '40%',
//     zIndex: 0, 
//     top: '20%', 
//     left: '10%',
//     width: 200, 
//     height: 200, 
//     border: '30px solid rgba(255, 255, 255, 0.5)',
//     overflow: 'hidden', 
//   }
// }));

// export default IndexPage;




// <html lang="en">
// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5">


//   <style>
//     body,html {
//       margin:0;
//       padding:0;
//       color: #F3F4F5;
//       background: #3c2d7f;
//       overflow-x: hidden;
//       height: 10000vh;
//       font-family: 'Montserrat', sans-serif;
//     }

//     #main {
//       opacity: 0;
//       transition: opacity 200ms;
//     }

//     #main.loaded {
//       opacity: 1;
//     }

//     #mario {
//       width: 256px;
//       height: 256px;
//       /*left: 0;*/
//       position: fixed;
//       top: calc(70vh - 256px)
//     }

//     #bowser {
//       width: 524px;
//       height: 350px;
//       /*left: 100vw;*/
//       position: fixed;
//       top: calc(70vh - 330px)
//     }

//     #stars {
//       width: 100vw;
//       height: 70vh;
//       background: url("img/mario-stars.gif");
//       background-size: 800px;
//       position: fixed;
//       opacity: 0.7;
//       top: 0;
//     }

//     #foreground {
//       width: 100vw;
//       height: 30vh;
//       background: url("img/mario-foreground.png");
//       background-size: 15vh;
//       position: fixed;
//       top: 70vh;
//     }

//     #nyan {
//       width: 300px;
//       height: 119px;
//       position: fixed;
//       top: 20vh;
//       left: 0;
//     }

//     #logo {
//       width: 300pt;
//       height: 100pt;
//       background: url(img/mario-logo.png) no-repeat center top;
//       background-size: contain;
//       position: fixed;
//       top: 10vh;
//       left: calc(50vw - 150pt);
//       z-index: 200;
//     }

//     #scrolltext {
//       width: 300pt;
//       height: 50pt;
//       background: url(img/mario-scrolldown.png) no-repeat center top;
//       background-size: contain;
//       position: fixed;
//       top: 83vh;
//       left: calc(50vw - 150pt);
//     }

//     #planet1 {
//       width: 30vw;
//       height: 30vw;
//       position: fixed;
//       left: 100vw;
//       bottom: 29vh;
//     }

//     #planet2 {
//       width: 20vw;
//       height: 20vw;
//       top: 10vh;
//       left: 30pt;
//       position: fixed;
//     }

//     .github-corner {
//       z-index: 1000;
//       display: block;
//       position: fixed;
//       top: 0;
//       right: 0;
//       transform: scale(1.2);
//     }

//   </style>

//   <script src="./lib/lax.min.js"></script>
//   <!-- <script src="../src/lax.js"></script> -->

//   <script type="text/javascript">
//     window.onload = function() {
//       document.getElementById("main").classList.add("loaded")

//       lax.setup()

//       const update = () => {
//         lax.update(window.scrollY)
//         window.requestAnimationFrame(update)
//       }

//       window.requestAnimationFrame(update)
//     }
//   </script>

// </head>


// <body>
//   <div id="main">
//     <div id="header" class="section">

//       <div 
//         id="stars"
//         class="lax"
//         data-lax-bg-pos-x="0 0, 10000 -800 | loop=10000"
//       ></div>

//       <div 
//         id="planet1"
        // class="lax"
        // data-lax-translate-x="0 0, 5000 (-vw-elw)"
        // data-lax-sprite-data="382,382,15,5,10"
        // data-lax-sprite-image="./img/bart.png"
//       ></div>

//       <div 
//         id="foreground"
        // class="lax"
        // data-lax-bg-pos-x="0 0, 7000 (-15*vh) | loop=7000"
//       ></div>

//       <div 
//         id="logo"
//       ></div>

//       <div 
//         id="scrolltext"
//         data-lax-translate-y="0 0, 360 350"
//         class="lax"
//       ></div>

//       <div 
//         id="nyan"
//         data-lax-sprite-data="300,119,12,4,10"
//         data-lax-translate-x="0 vw, 600 -elw | loop=600"
//         data-lax-sprite-image="./img/nyan.png"        
//         class="lax"
//       ></div>

//       <div 
//         id="mario"
        // class="lax"
        // data-lax-translate-x="0 -elw, 720 (vw+elw) | loop=720"
        // data-lax-translate-y="0 0, 240 0, 300 -500, 420 0, 720 0 | loop=720"
        // data-lax-sprite-data="256,256,12,4,5"
        // data-lax-sprite-image="./img/mario-sprite.png"
//       ></div>

//       <div 
//         id="bowser"
//         class="lax"
//         data-lax-translate-x="0 vw, 720 -elw | loop=720"
//         data-lax-sprite-data="524,350,8,4,10"
//         data-lax-sprite-image="./img/bowser-sprite.png"
//       ></div>


//     </div>

//   </div>

//     <a href="https://github.com/alexfoxy/laxxx" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>


// </body>
