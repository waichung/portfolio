import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import lax from 'lax.js';

const Introduction = () => {

  const ref = useRef();
  const switchRef = useRef();
  const simpleRef = useRef();
  const theSimpleRef = useRef();
  const theRef = useRef();
  const inRef = useRef();
  const inLifeRef = useRef();
  const lifeRef = useRef();
  const thingsRef = useRef();
  const bestRef = useRef();
  const theSimpleThingsInRef = useRef();
  const scrollRef = useRef();
  const [moveLeftBy, setMoveLeftBy] = useState(0);
  const [moveRightBy, setMoveRightBy] = useState(0);
  const [moveDownBy, setMoveDownBy] = useState(0);

  useEffect(() => {

    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;

    //move 'theSimple ' left
    const offsetLeftOriginal = switchRef.current.offsetLeft + 0.05 * (browserWidth);
    const offsetLeftOne = 0.5 * (browserWidth - switchRef.current.offsetWidth);
    const moveLeftBy = offsetLeftOriginal - offsetLeftOne;
    setMoveLeftBy(-1*moveLeftBy);

    //more 'things in' to the right
    const leftFromBrowserToThings = thingsRef.current.offsetLeft + 0.05 * browserWidth;
    const targetOffsetLeft = 0.5 * (browserWidth - thingsRef.current.offsetWidth);
    const moveRightBy = leftFromBrowserToThings - targetOffsetLeft;
    setMoveRightBy(-1* moveRightBy);

    //move simple and things to the middle
    const heightOfTheSimpleThingsIn = theSimpleThingsInRef.current.offsetHeight;
    const currentDistanceFromTop = theSimpleThingsInRef.current.offsetTop;
    const targetDistanceFromTop = 0.5 * (browserHeight - heightOfTheSimpleThingsIn);
    const moveDownBy = targetDistanceFromTop - currentDistanceFromTop;
    setMoveDownBy(moveDownBy);
    
    //when the state is updated, we need to reinitiate lax on the elements in question otherwise things wouldn't work.
    lax.addElement(inRef.current);
    lax.addElement(ref.current);
    lax.addElement(theRef.current);
    lax.addElement(theSimpleRef.current);
    lax.addElement(inLifeRef.current);
    lax.addElement(lifeRef.current);
    lax.addElement(simpleRef.current);
    lax.addElement(bestRef.current);
    lax.addElement(scrollRef.current);

  });

  return (
    <Intro ref={ref} data-lax-translate-y="0 0, (2*vh) (2*vh)">
      <div ref={theSimpleThingsInRef}><div ref={theSimpleRef} data-lax-translate-x={`0 0, vh ${moveLeftBy}`} data-lax-translate-y={`0 0, vh ${moveDownBy}`}>
        <span ref={theRef} data-lax-opacity="0 1, vh 0">
          The
        </span> <Switch ref={switchRef}><span ref={simpleRef} data-lax-opacity="vh 1, (2*vh) 0">simple</span><Best ref={bestRef} data-lax-opacity="(1.2*vh) 0, (2*vh) 1">best</Best></Switch>
      </div> 
      <div ref={inLifeRef} data-lax-translate-x={`0 0, vh ${moveRightBy}`} data-lax-translate-y={`0 0, vh ${moveDownBy}`}>
      <span ref={thingsRef}>things</span> <span ref={inRef} data-lax-opacity="0 1, vh 0">
          in
        </span></div></div> <div ref={lifeRef} data-lax-opacity="0 1, vh 0" data-lax-translate-x={`0 0, vh ${moveLeftBy}`}>life.</div>
      <ScrollForMore ref={scrollRef} data-lax-opacity="0 1, 50 0">scroll to start story...</ScrollForMore>
    </Intro>
  );
};

const Switch = styled.span`
  position: relative;
`;

const Best = styled.span`
  position: absolute;
  left: 0;
`;

const ScrollForMore = styled.span`
  position: absolute;
  text-transform: lowercase;
  font-size: 20px;
  bottom: 5vh;
  right: 5vw;
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


export default Introduction;