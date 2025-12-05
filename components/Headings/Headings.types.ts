import { TextProps } from 'react-native';

export type HeadingVariant = 'title' | 'subtitleMedium' | 'subtitle' | 'body' | 'buttonText' | 'bodySmall' | 'fieldOverline';

export interface HeadingProps extends TextProps {
  variant?: HeadingVariant;
  children: React.ReactNode;
}