import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import withLax from '../HOC/withLax';
import SceneTemplate from '../General/Scene';
import LinkedIn from '../General/Icons/LinkedIn';
import Github from '../General/Icons/Github';

const Script = () => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);
  const [isMobile, setResponsive] = useState(false);
  useEffect(() => {
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;
    const widthHeightRatio = browserWidth/browserHeight;
    const goldenRatio = 1.25
    setOffset(widthHeightRatio <= goldenRatio ? 30 : 0);
    setResponsive(widthHeightRatio < 1 ? true : false);
  });

  const stopScroll = isMobile ? 2.8 : 3.1;
  const offsetHeight = isMobile ? '40vh' : 'auto';
  const scaleSize = isMobile  ? 6 : 1.1;
  const moveYWhy = isMobile ? 0.1 : 0.05;
  const moveXWhy = isMobile ? 0 : 0.4;
  const moveYNot = isMobile ? 0.2 : 0.13;
  const moveXNot = isMobile ? 0.1 : 0.28;
  const rotateWhy = isMobile ? 35 : 40;
  const rotateNot = isMobile ? 40 : 45;

  return (
    <React.Fragment>
      <Scene className="lax" data-lax-translate-y={`(${stopScroll}*vh) (1*vh), (5*vh) (2.9*vh)`}>
        <ScriptBlock className="lax" data-lax-translate-x="(2*vh) elw, (2.8*vh) (-0.9*elw)" data-lax-translate-y="(4.6*vh) 0, (4.8*vh) (0.25*vh)">
        <Switch><span className="lax" data-lax-opacity="(4.4*vh) 1, (4.8*vh) 0"><DisperseToLeft>Onl</DisperseToLeft><InlineSpan className="lax" data-lax-translate-x="(4.4*vh) 0, (4.8*vh) -50">y</InlineSpan> <DisperseToRight>one</DisperseToRight></span><WHYNOT className="lax" data-lax-opacity="0 0, (4.6*vh) 0, (4.8*vh) 1">WHY NOT <br/><Tagline>Software development made simple</Tagline></WHYNOT></Switch></ScriptBlock>
        <ScriptBlock style={{ height: '65vh', transform: 'translateY(30vh)'}} className="lax" data-lax-translate-x="(2.8*vh) elw, (3.6*vh) (-0.9*elw)"><DisperseToLeft>Que</DisperseToLeft><Switch className="lax" data-lax-translate-y="(4.6*vh) 0, (4.8*vh) (0.245*vh)" data-lax-translate-x="(4.6*vh) 0, (4.8*vh) (-0.05*vw)"><span className="lax" data-lax-opacity="(4.4*vh) 1, (4.8*vh) 0">s</span><WHY className="lax" data-lax-opacity="(4.6*vh) 0, (4.8*vh) 1" data-lax-translate-y={`(4.8*vh) 0, (5*vh) (${moveYWhy}*vh)`} data-lax-translate-x={`(4.8*vh) 0, (5*vh) (${moveXWhy}*vw)`} data-lax-rotate={`(4.8*vh) 0, (5*vh) ${rotateWhy}`} data-lax-scale={`(4.8*vh) 1, (5*vh) ${scaleSize}`}>?</WHY></Switch><DisperseToRight>tion</DisperseToRight></ScriptBlock>
        <ScriptBlock style={{height: offsetHeight, transform: 'translateY(60vh)'}} className="lax" data-lax-translate-x="(3.6*vh) elw, (4.2*vh) (-0.9*elw)"><DisperseToLeft>mat</DisperseToLeft><Switch className="lax" data-lax-translate-x="(4.6*vh) 0, (4.8*vh) (0.1*vw)" data-lax-translate-y="(4.6*vh) 0, (4.8*vh) (-40)"><span className="lax" data-lax-opacity="(4.4*vh) 1, (4.8*vh) 0">t</span><NOT className="lax" data-lax-opacity="(4.6*vh) 0, (4.8*vh) 1" data-lax-translate-y={`(4.8*vh) 0, (5*vh) (${moveYNot}*vh)`} data-lax-translate-x={`(4.8*vh) 0, (5*vh) (${moveXNot}*vw)`} data-lax-rotate={`(4.8*vh) 0, (5*vh) ${rotateNot}`} data-lax-scale={`(4.8*vh) 1, (5*vh) ${scaleSize}`}>!</NOT></Switch><DisperseToRight>ers</DisperseToRight></ScriptBlock>
        <IconsContainer className="lax" data-lax-opacity={`(4.5*vh) 0, (5*vh) 1`}>
          <IconLink href="https://google.com"><LinkedIn/></IconLink>
          <IconLink href="https://google.com"><Github/></IconLink>
        </IconsContainer>
      </Scene>
    </React.Fragment>
  );
};

const IconsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 13vw;
  opacity: 0;
`;

const IconLink = styled.a`
  height: 3vw;
  width: 3vw;
  margin-right: 2vw;

  & svg {
    height: 3vw;
    width: 3vw;
  }
`;

const DisperseToLeft = ({children}) => <InlineSpan className="lax" data-lax-translate-x='(4.2*vh) 0, (4.25*vh) -1000'>{children}</InlineSpan>

const DisperseToRight = ({children}) => <InlineSpan className="lax" data-lax-translate-x='(4.2*vh) 0, (4.25*vh) 1000'>{children}</InlineSpan>

const Tagline = styled.span`
  position: absolute;
  bottom: 0vh;
  text-transform: capitalize;
  font-size: 3vw;
  left: 2vw;
`;

const InlineSpan = styled.span`
  display: inline-block;
`;

const Switch = styled.span`
  position: relative;
  display: inline-block;
`;

const WHYNOT = styled.span`
  position: absolute;
  left: 0;
`;

const WHY = styled.span`
  position: absolute;
  left: 9px;
  top: -9px;
  font-size: 17vw;
  z-index: 99;
`;

const NOT = styled.span`
  position: absolute;
  left: 43px;
  font-size: 16vw;
  z-index: 0;
`;

const Scene = styled(SceneTemplate)(props => ({
  transform: props.transform
}));

const ScriptBlock = styled.div`
  position: fixed;
  left: 0.5vw;
  top: 10%;
  text-transform: uppercase;
  width: auto;
  font-size: 16vw;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  width: 100vw;
`;


export default withLax(Script);