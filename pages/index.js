import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import lax from 'lax.js';
import { useLax, useLaxElement } from 'use-lax';
import Introduction from '../src/components/Introduction';
import Something from '../src/components/Script';

function IndexPage () {
  // const the = document.getElementById('the');
  // console.log(the.getBoundingClientRect().width);
  useLax();
  // const ref = useLaxElement();
  // let theRef = useLaxElement();
  // let theSimpleRef = useLaxElement();
  // const [theEl, setTheEl] = useState(undefined);
  // useEffect(() => {
  //   console.log(ref);
  //   setTheEl(theRef);
  //   lax.addElement(theSimpleRef.current);
  // });
  // const moveSimpleLeftBy = parseInt(theRef && theRef.current && -0.5 * theRef.current.offsetWidth);
  // const theSimpleAnimation = `0 0, vh ${moveSimpleLeftBy}`;
  // const scriptRef = useLaxElement();
  return(
    <Main>
      <Introduction />
      {/* <Script /> */}
      {/* <Script ref={scriptRef} data-lax-translate-x="(2*vh) elw, elw -elw">Only one question matters.</Script> */}
      <Something />
      {/* <Words ref={ref}>Question</Words> */}
    </Main>
  );
}

// function IndexPage () {
//   // const the = document.getElementById('the');
//   // console.log(the.getBoundingClientRect().width);
//   useLax();
//   const ref = useLaxElement();
//   let theRef = useLaxElement();
//   let theSimpleRef = useLaxElement();
//   const [theEl, setTheEl] = useState(undefined);
//   useEffect(() => {
//     console.log(ref);
//     setTheEl(theRef);
//     lax.addElement(theSimpleRef.current);
//   });
//   const moveSimpleLeftBy = parseInt(theRef && theRef.current && -0.5 * theRef.current.offsetWidth);
//   const theSimpleAnimation = `0 0, vh ${moveSimpleLeftBy}`;
//     return(
//       <Main>
//         <Intro ref={ref} data-lax-translate-y="0 0, elh elh">
//           <div ref={theSimpleRef} data-lax-translate-x={theSimpleAnimation}>
//             <span ref={theRef} data-lax-opacity="0 1, vh 0">
//               The
//             </span> simple
//           </div> 
//           things in life.
//           <ScrollForMore>Scroll for more</ScrollForMore>
//         </Intro>
//         <Script ref={useLaxElement()} data-lax-translate-x="0 elw, elw -elw">The only question that matters why not</Script>
//         {/* <Words ref={ref}>Question</Words> */}
//       </Main>
//     );
// }

const InlineBlock = styled.div`
  display: inline-block;
`;

const ScrollForMore = styled.span`
  position: absolute;
  text-transform: lowercase;
  font-size: 20px;
  bottom: 5vh;
  right: 5vw;
`;

const Main = styled.div`
  opacity: 1;
  transition: opacity 5000ms;  
`;

const Intro  = styled.div`
  padding-left: 5vw;
  height: 100vh;
  font-size: 15vw;
  text-align: left;
  text-transform: uppercase;
  display: block;
  margin: auto;
`;

const Script = styled.div`
  position: fixed;
  left: 1vw;
  top: 30%;
  text-transform: uppercase;
  width: auto;
  font-size: 16vw;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;


const Section = styled.section`
  height: 100vh;
  padding: 0 0 0 10vw;
`;

const IntroSection = styled(Section)(props => ({
  background: props.background,
  zIndex: 99, 
  position: 'absolute',
  top: 0,
  // width: 'auto',
  // display: 'flex', 
  // alignContent: 'center',
  // paddingTop: '10em',
  '& p': {
    textTransform: 'uppercase',
    width: '100vw',
    display: 'block',
    margin: 'auto 0',
    fontSize: '50vh',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'clip',
  }
}));

const AnimSection = styled(Section)(props => ({
  background: '#1989A6',
  padding: '12em',
  height: 'calc(100vh - 12em)', 
  overflow: 'hidden',
  position: 'relative', 
  '& h1': {
    position: 'absolute',
    fontSize: '10em',
    margin: 0, 
    textTransform: 'uppercase',
    left: '15%', 
    zIndex: 1,
  },
  '& p': {
    position: 'absolute',
    fontSize: '2em',
    width: '40%',
    zIndex: 1, 
    top: 500
  }, 
  "& .box1": {
    position: 'absolute',
    width: '40%',
    zIndex: 0, 
    top: 0, 
    left: '10%',
    width: 800, 
    height: 800, 
    border: '30px solid #20A2C3',
    overflow: 'hidden', 
    transform: 'rotateZ(65deg)'
  },
  "& .box2": {
    position: 'absolute',
    width: '40%',
    zIndex: 0, 
    top: '20%', 
    left: '10%',
    width: 200, 
    height: 200, 
    border: '30px solid rgba(255, 255, 255, 0.5)',
    overflow: 'hidden', 
  }
}));

export default IndexPage;


