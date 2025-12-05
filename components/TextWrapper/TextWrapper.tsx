import React from 'react';
import { Text } from 'react-native';
import { TextWrapperProps } from './TextWrapper.types';
import { styles } from './TextWrapper.styles';

const TextWrapper: React.FC<TextWrapperProps> = ({ style, children, ...rest }) => {
  return (
    <Text {...rest} style={[styles.base, style]}>
      {children}
    </Text>
  );
};

export default TextWrapper;