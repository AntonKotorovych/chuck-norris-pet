import { StyledDiv, StyledImg, StyledSection } from './styled';

const API = import.meta.env.VITE_CHUCK_NORRIS_API;

export default function MainTitle() {
  return (
    <StyledSection>
      <StyledDiv>
        <h1>Chuck Norris Joke Generator</h1>
        <a href={API} target="_blank" rel="noopener noreferrer">
          <StyledImg
            src="../assets/chuck.png"
            alt="Chuck Norris pic"
            title="Link to api.chucknorris.io"
          />
        </a>
      </StyledDiv>
    </StyledSection>
  );
}
