import { Container } from "./styles";

export const Input = ({ placeholder, onChange, title }) => {
  return (
    <Container>
      <label>{title}</label>
      <input placeholder={placeholder} onChange={onChange} />
    </Container>
  );
};
