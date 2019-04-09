import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import withLax from '../HOC/withLax';
// import lax from 'lax.js';

const Script = () => {
  const ref = useRef();
  useEffect(() => {
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;
    // lax.addElement(ref.current);
  });

  return (
    <Scene2>
      <ScriptBlock className="lax" data-lax-translate-x="(2*vh) elw, (2.8*vh) (-0.9*elw)">Only one</ScriptBlock>
      <ScriptBlock className="lax" style={{transform: 'translateY(20vh)'}} data-lax-translate-x="(2.8*vh) elw, (3.6*vh) (-0.9*elw)">question</ScriptBlock>
      {/* <ScriptBlock className="lax" data-lax-translate-x="(2*vh) elw, (2.8*vh) (-0.9*elw)">matters</ScriptBlock> */}
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
  top: 10%;
  text-transform: uppercase;
  width: auto;
  font-size: 16vw;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;


export default withLax(Script);