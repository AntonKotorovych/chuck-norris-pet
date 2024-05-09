import { StyledDiv, StyledImg, StyledSection } from './styled';

export default function MainTitle() {
  return (
    <StyledSection>
      <StyledDiv>
        <h1>Chuck Norris - Joke Generator</h1>
        <a
          href="https://api.chucknorris.io/"
          target="_blank"
          rel="noopener noreferrer">
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
