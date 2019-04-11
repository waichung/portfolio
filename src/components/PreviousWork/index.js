import styled from 'styled-components';
import Scrollbar from 'react-smooth-scrollbar';

const PreviousWork = () => {
  return (
    <Slide className="lax" data-lax-opacity={`(5*vh) 0, (5.5*vh) 1`}> 
      <div
        data-lax-translate-x="0 vw, vh -elw | loop=vh"
        className="lax"
      >
       yo!
      </div>
    </Slide>
  );
}

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  position: absolute;
  bottom: -10vh;
  left: 0;
  // opacity: 1;
  color: white;
`;

export default PreviousWork;