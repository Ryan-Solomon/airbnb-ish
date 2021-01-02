import styled from 'styled-components/native';

type TextProps = {
  fontSize: string;
  fontColor: string;
  margin: string;
};

export const SText = styled.Text<Partial<TextProps>>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ fontColor }) => fontColor || 'white'};
  margin: ${({ margin }) => margin || '0px'};
`;
