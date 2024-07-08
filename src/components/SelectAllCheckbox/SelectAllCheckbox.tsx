import { StyledCheckbox } from 'components/ManageJokes/JokeItemModal/styled';
import { StyledLabel, StyledText } from './styled';

export default function SelectAllCheckbox() {
  return (
    <StyledLabel htmlFor="selectAll">
      <StyledCheckbox type="checkbox" id="selectAll" />
      <StyledText>Select all</StyledText>
    </StyledLabel>
  );
}
