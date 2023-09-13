import React from 'react'
import { StepContainer, StepParagraph, StepTitle, SvgIcon } from '../../ui/Step/StepUi';


const Step = ({ title, description, customWidth, customPadding   }) => (

<StepContainer>
    <StepTitle style={{paddingRight: customPadding }}>{title}</StepTitle>
    <SvgIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
      <path d="M0 1L50 0.999996" stroke="#3D4F5C" />
    </svg>
    </SvgIcon>
    <StepParagraph style={{ width: customWidth }}>{description}</StepParagraph>
</StepContainer>
);


export default Step