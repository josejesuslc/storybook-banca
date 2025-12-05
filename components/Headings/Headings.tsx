import React from 'react';
import TextWrapper from '../TextWrapper/TextWrapper';
import { HeadingProps } from './Headings.types';
import { styles } from './Headings.styles';

const Headings: React.FC<HeadingProps> = ({
  variant = 'body',
  children,
  style,
  ...rest
}) => {
  return (
    <TextWrapper {...rest} style={[styles[variant], style]}>
      {children}
    </TextWrapper>
  );
};

export default Headings;