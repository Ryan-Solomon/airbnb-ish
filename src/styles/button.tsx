import styled from 'styled-components/native';

type TouchableOpacityProps = {
  backgroundColor: string;
  width: string;
  margin: string;
  padding: string;
  borderRadius: string;
};

export const STouchableOpacity = styled.TouchableOpacity<
  Partial<TouchableOpacityProps>
>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#222'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0px'};
  padding: ${({ padding }) => padding || '0px'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
`;
