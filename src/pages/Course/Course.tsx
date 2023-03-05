
import React from 'react';

import { CourseCart, DateBlock, GradientButtonWithMargin, H2, H3, Img, SectionCart, Text, TextBlock } from './styled';

export const Course = () => (
  <SectionCart>
    <CourseCart>
      <Img />
      <DateBlock>
        <H2> 29 Марта 2023</H2>
      </DateBlock>
      <TextBlock>
        <Text> Вы создадите 9 проектов для портфолио</Text>
      </TextBlock>
      <GradientButtonWithMargin> Подробнее </GradientButtonWithMargin>
      <H3> 12 месяцев</H3>
    </CourseCart>
  </SectionCart>

);
