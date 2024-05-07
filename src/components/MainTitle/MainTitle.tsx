import { StyledDiv, StyledImg, StyledSection } from './styled';

export default function MainTitle() {
  return (
    <StyledSection>
      <StyledDiv>
        <h1>Chuck Norris - Joke Generator</h1>
        <StyledImg src="../assets/chuck.png" alt="" />
      </StyledDiv>
    </StyledSection>
  );
}
