import dynamic from 'next/dynamic';
import Scrollbar from 'react-smooth-scrollbar';
import { useEffect, useState } from 'react';

const App = dynamic(
  () => import('../src/components'),
  {
    ssr: false
  }
);

let something = false;

function IndexPage () {
  useEffect(() => {
    history.scrollRestoration = 'manual';
    document.addEventListener('scroll', () => {
      if ((document.body.scrollHeight - window.innerHeight) - window.scrollY < 150) {
        if(!something)
          setTimeout(() => {
            window.scroll(0, (window.scrollY - 0.25 * window.innerHeight));
            something = false;
          }, 1);
          something = true;
      }
    });
  });

  return(
    <Scrollbar
      style={{height: '700vh', width: '100vw', maxWidth: '100%', overflowX: 'hidden'}}
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
