import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import lax from 'lax.js';

const Script = () => {

  const ref = useRef();
  useEffect(() => {
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;
    lax.addElement(ref.current);
  });

  return (
    <Scene2>
      <ScriptBlock ref={ref} data-lax-translate-x="(2*vh) 100, (3*vh) -elw">Only one</ScriptBlock>
    </Scene2>
  );
};

const Scene2  = styled.div`
  padding-left: 5vw;
  height: 100vh;
  transform: translateY(200vh);
  font-size: 15vw;
  text-align: left;
  text-transform: uppercase;
  display: block;
  margin: auto;
`;

const ScriptBlock = styled.div`
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


export default Script;