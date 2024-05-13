import Select from 'react-select';
import Button from 'components/Button';
import Input from 'components/Input';
import {
  StyledDiv,
  StyledInputContainer,
  StyledSVGButton,
  StyledSection,
  customSelectStyles,
} from './styled';

const options = [
  { value: 'Test category 1', label: 'Test category 1' },
  { value: 'Test category 2', label: 'Test category 2' },
  { value: 'Test category 3', label: 'Test category 3' },
];

export default function FilterPanel() {
  return (
    <StyledSection>
      <StyledDiv>
        <Select
          options={options}
          styles={customSelectStyles}
          placeholder="Category Selector"
        />
      </StyledDiv>
      <StyledDiv>
        <StyledInputContainer>
          <StyledSVGButton position="left">
            <img src="../assets/magnifying-glass.svg" alt="" />
          </StyledSVGButton>
          <Input />
          <StyledSVGButton position="right">
            <img src="../assets/cross.svg" alt="" />
          </StyledSVGButton>
        </StyledInputContainer>
      </StyledDiv>
      <StyledDiv>
        <Button variant="search">Search</Button>
      </StyledDiv>
      <StyledDiv>
        <Button variant="clear">Clear Filtering</Button>
      </StyledDiv>
    </StyledSection>
  );
}
