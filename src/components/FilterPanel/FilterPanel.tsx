import { useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import CategorySelect from 'components/CategorySelect';

import { StyledContainer, StyledSection } from './styled';

const options = [
  { value: 'Test category 1', label: 'Test category 1' },
  { value: 'Test category 2', label: 'Test category 2' },
  { value: 'Test category 3', label: 'Test category 3' },
];

export default function FilterPanel() {
  const [showCrossButton, setShowCrossButton] = useState(true);

  const handleCrossButton = () => setShowCrossButton(!showCrossButton);

  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect options={options} placeholder="Category Selector" />
      </StyledContainer>
      <StyledContainer>
        <Input
          placeholder="Search a joke..."
          leftIcon="../assets/magnifying-glass.svg"
          rightIcon={showCrossButton ? '../assets/cross.svg' : ''}
          onClear={handleCrossButton}
        />
      </StyledContainer>
      <StyledContainer>
        <Button variant="main">Search</Button>
      </StyledContainer>
      <StyledContainer>
        <Button variant="secondary">Clear Filtering</Button>
      </StyledContainer>
    </StyledSection>
  );
}
