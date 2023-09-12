import React from 'react'
import Step from '../AboutUs/Step';
import { styled } from 'styled-components';
import Bulb from '../../assets/Values/Bulb.png';

export const ValuesContainer = styled.div`
    background: #FBFAFA;

`;

export const ValuesTitle = styled.div`
    color: #3D4F5C;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: -1px;
`;

export const ValuesText = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 154px 153px;
    align-items: center;

`;

export const ValuesImg = styled.div`

`;

export const ValuesSteps = styled.div`

`;

export const Values = () => {
    const stepsData = [
        { title: '01. Innovation', description: 'Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.', customWidth: '', customPadding: '' },
        { title: '02. People', description: 'Talent is what enable us to create great companies.', customWidth: '', customPadding: '' },
    ];
  return (
<ValuesContainer>
    <ValuesText>
        <ValuesTitle>Our core values</ValuesTitle>
        <ValuesImg><img src={Bulb} alt="Bulb" /></ValuesImg>
    </ValuesText>
    <ValuesSteps>
        {stepsData.map((step, index) => (
        <Step key={index} title={step.title} description={step.description} customWidth={step.customWidth} customPadding={step.customPadding} dangerouslySetInnerHTML={{ __html: step.description }}/>
      ))}
    </ValuesSteps>
</ValuesContainer>
  )
}
