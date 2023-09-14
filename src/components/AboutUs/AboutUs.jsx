import React from 'react'
import { AboutContainer, AboutInformation, AboutParagraph, AboutPicture, AboutSteps, AboutText, AboutTitle, ImgPicture } from '../../ui/AboutUs/AboutUs';
import Step from '../../utils/Step/Step';
import QuestionMark from '../../assets/AboutUs/QuestionMark.png';

const AboutUs = () => {

const stepsData = [
    { title: '01', description: 'We develop innovative products, systems and services', customWidth: '329px', customPadding: '' },
    { title: '02', description: 'Next we build teams to scale them into companies', customWidth: '329px', customPadding: '' },
    { title: '03', description: 'Each startup solving one problem\n at a time', customWidth: '307px', customPadding: '468px' },
];

  return (

    <AboutContainer>
       
        <AboutText>

        <AboutInformation>
            <AboutTitle>Who we are</AboutTitle>
            <AboutPicture>
                <ImgPicture src={QuestionMark} alt="Question mark" />
            </AboutPicture>
        </AboutInformation>

        </AboutText>
          
            <AboutParagraph>We create products that have innovation and technology at their core.<br></br>We value working with talented people that understand the possibilities of today.
            </AboutParagraph>
         
        <AboutSteps>
        {stepsData.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} customWidth={step.customWidth} customPadding={step.customPadding} dangerouslySetInnerHTML={{ __html: step.description }}/>
        ))}
        </AboutSteps>

    </AboutContainer>
  )
}

export default AboutUs