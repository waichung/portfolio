import dynamic from 'next/dynamic';
import Scrollbar from 'react-smooth-scrollbar';
import { useEffect, useState } from 'react';

const App = dynamic(
  () => import('../src/components'),
  {
    ssr: false
  }
);

function IndexPage () {
  useEffect(() => {
    history.scrollRestoration = 'manual';
  });

  return(
    <Scrollbar
      style={{height: '600vh', width: '100vw', maxWidth: '100%', overflowX: 'hidden'}}
      damping={0.000000001}
      renderByPixels={true}
      onScroll={(e, scrollbar)=> {
        scrollbar.scrollLeft = 0;
      }}
    >
      <App style={{overflowX: 'hidden'}}/>
    </Scrollbar>
  );
}

export default IndexPage;



// const InlineBlock = styled.div`
//   display: inline-block;
// `;

// const ScrollForMore = styled.span`
//   position: absolute;
//   text-transform: lowercase;
//   font-size: 20px;
//   bottom: 5vh;
//   right: 5vw;
// `;

// const Main = styled.div`
//   opacity: 1;
//   transition: opacity 5000ms;  
// `;

// const Intro  = styled.div`
//   padding-left: 5vw;
//   height: 100vh;
//   font-size: 15vw;
//   text-align: left;
//   text-transform: uppercase;
//   display: block;
//   margin: auto;
// `;

// const Script = styled.div`
//   position: fixed;
//   left: 1vw;
//   top: 30%;
//   text-transform: uppercase;
//   width: auto;
//   font-size: 16vw;
//   text-align: left;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: clip;
// `;


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


