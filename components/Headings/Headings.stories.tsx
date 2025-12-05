import React from 'react';
import { View } from 'react-native';
import TextWrapper from '../TextWrapper/TextWrapper';

export default {
  title: 'Foundations/Typography/TextWrapper',
  component: TextWrapper,
};

export const BaseText = () => (
  <View style={{ padding: 20 }}>
    <TextWrapper>Texto base con la tipografía predeterminada</TextWrapper>
    <TextWrapper style={{ fontSize: 20 }}>
      Texto base modificado (20px)
    </TextWrapper>
    <TextWrapper style={{ fontWeight: '700' }}>
      Texto base en Bold
    </TextWrapper>
  </View>
);