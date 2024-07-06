import Button from 'components/Button';
import { StyledFooter, StyledWrapper } from './styled';

export default function JokesFooterModal() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Button variant="main">Save</Button>
      </StyledWrapper>
    </StyledFooter>
  );
}
