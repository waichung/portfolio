import styled from 'styled-components';
import Scrollbar from 'react-smooth-scrollbar';

const works = [

  {
    title: 'Nestbloom', 
    description: 'Awwward winning design',
    imgUrl: 'https://via.placeholder.com/300',
    url: 'https://nestbloom.com'
  },
  {
    title: 'Jungle', 
    description: "UK's first 0% commission P2P Betting Platform",
    imgUrl: 'https://via.placeholder.com/300',
    url: 'https://jungleuk.xyz'
  },
  {
    title: 'NextID', 
    description: 'New frontiers for digital identity',
    imgUrl: 'https://via.placeholder.com/300',
    url: 'https://google.com'
  },

];
const PreviousWork = () => {
  return (
    <Slide className="lax" data-lax-opacity={`(5*vh) 0, (5.5*vh) 1`}> 
      <Title>My work</Title>
      <PortfolioContainer
      >
        {works.map((work, i) => {
          return (
            <WorkContainer key={i} data-lax-scale-y={calculateScaleAnimation(5.5, 6, works, i)} data-lax-translate-x={calculateTranslateXAnimation(5.5, 6, works, i)} data-lax-opacity={calculateOpacityAnimation(5.5, 6, works, i)} className="lax">
              <img src={work.imgUrl}></img>
              <WorkDetails href={work.url}>
                <WorkTitle>{work.title}</WorkTitle>
                <Description>{work.description}</Description>
              </WorkDetails>
            </WorkContainer>
          );
        })}
      </PortfolioContainer>
    </Slide>
  );
}

const calculateOpacityAnimation = (start, end, works, i) => {
  let pie = end - start;
  let slice = pie/(2*works.length);
  let animStart = start + (i)*slice;
  let animEnd = animStart + slice + 0.015;
  return `(${animStart}*vh) 0, (${animEnd}*vh) 1, (${animEnd+slice}*vh) 0`;
};

const calculateTranslateXAnimation = (start, end, works, i) => {
  let pie = end - start;
  let slice = pie/(works.length*2);
  let animStart = start + (i)*slice;
  let animEnd = animStart + slice;
  return `(${animStart}*vh) (1*vw), (${animEnd}*vh) (0.5*vw),(${animEnd+slice}*vh) (-0.5*vw)`;
};

const calculateScaleAnimation = (start, end, works, i) => {
  let pie = end - start;
  let slice = pie/(2*works.length);
  let animStart = start + (i)*slice;
  let animEnd = animStart + slice + 0.015;
  return `(${animStart}*vh) 0, (${animEnd}*vh) 1, (${animEnd+slice}*vh) 0`;
};

const porfolioContainerWidth = `${works.length*100}vh`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${porfolioContainerWidth};
  transform: translateY(20vh) !important;
`;

const WorkContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  position: absolute;

`;

const WorkTitle= styled.div`
  font-size: 2vw;
`;

const Description= styled.div`
  font-size: 1vw;
  text-transform: none;
`;

const WorkDetails = styled.a`
  display: inline-block;
  text-align: center;
  margin-top: 3vh;
  text-decoration: none;
  color: white;
`;

const Title = styled.div`
  transform: rotate(90deg);
  font-size: 2vw;
  position: fixed;
  right: 0;
  bottom: 10vh;
`;

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