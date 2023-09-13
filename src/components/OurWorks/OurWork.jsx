import React from 'react'
import { Square, SquareButton, SquareDescription, SquareTitle } from '../../ui/OurWorks/OurWorkUi';

export const OurWork = ({ title, description, children, titleColor }) => (
    <Square>
      <SquareTitle style={{color:titleColor}}>{title}</SquareTitle>
      <SquareDescription>{description}</SquareDescription>
      {children}
      <SquareButton>More</SquareButton>
    </Square>
  );
  