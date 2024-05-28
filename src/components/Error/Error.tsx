import { StyledErrorContainer } from './styled';

interface Error {
  title: string;
  message: string;
}

export default function Error({ title, message }: Error) {
  return (
    <StyledErrorContainer>
      <h3>
        {title}: {message}
      </h3>
      <span>Try to reload page!</span>
    </StyledErrorContainer>
  );
}
