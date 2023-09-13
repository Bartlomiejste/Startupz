import React from 'react'
import { ReactComponent as Message } from '../../assets/SolvingProblems/Message.svg'
import LeftThumb from '../../assets/SolvingProblems/LeftThumb.png';
import RightThumb from '../../assets/SolvingProblems/RightThumb.png';
import Person from '../../assets/SolvingProblems/Person.png';
import { CenteredImage, Exit, Paragraph, SolvingMessage, SolvingProblemsContainer, SolvingText, Support, SvgContainer, Thumb } from '../../ui/SolvingProblems/SolvingProblemsUi';


const SolvingProblems = () => {
  return (
<SolvingProblemsContainer>

        <SolvingMessage>
            <Message />
            <Exit>X</Exit>
        </SolvingMessage>

  <SolvingText>

  <Thumb>
      <img src={LeftThumb} alt="Left Thumb" />
  </Thumb>

    <Paragraph>We love solving problems!</Paragraph>

  <Thumb>
      <img src={RightThumb} alt="Right Thumb" />
  </Thumb>

  <Support>
          <SvgContainer>
            <svg
              width="114"
              height="113"
              viewBox="0 0 114 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="57" cy="57" r="47" fill="white" />
              <circle cx="57" cy="57" r="42" fill="#F5F5F5" />
            </svg>
            <CenteredImage src={Person} alt="Person" />
          </SvgContainer>      
  </Support>

  </SolvingText>

</SolvingProblemsContainer>
  )
}

export default SolvingProblems