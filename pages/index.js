import dynamic from 'next/dynamic';
import SmoothScrollbar from 'smooth-scrollbar';
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
      plugins={{
        effect: 'glow',
      }}
      onScroll={(e, scrollbar)=> {
        scrollbar.scrollLeft = 0;
      }}
    >
      <App style={{overflowX: 'hidden'}}/>
    </Scrollbar>
  );
}

export default IndexPage;
