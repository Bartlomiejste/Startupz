import React from 'react'
import LeftThumb from '../../assets/SolvingProblems/LeftThumb.png';
import RightThumb from '../../assets/SolvingProblems/RightThumb.png';
import { OurWork } from './OurWork';
import Tolq from '../../assets/OurWorks/Tolq.png';
import FeedbackLabs from '../../assets/OurWorks/FeedbackLabs.png';
import LegalSite from '../../assets/OurWorks/LegalSite.png';
import CodeKeeper from '../../assets/OurWorks/CodeKeeper.png';
import { OurWorkImg, OurWorksContainer, OurWorksSquare, OurWorksText, OurWorksTitle, Paragraph, Thumb } from '../../ui/OurWorks/OurWorksUi';

const OurWorks = () => {

    const ourWorksData = [
        { title: 'Tolq', description: 'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.' , image: Tolq, titleColor:"#A9BC87" },
        { title: 'Feedback Labs', description: 'Feedback Labs turns feedback into actionable insights for your team.', image: FeedbackLabs, titleColor:"#8BB5C9"},
        { title: 'Codekeeper', description: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.', image: CodeKeeper, titleColor:"#00A0B6"},
        { title: 'LegalSite', description: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.', image: LegalSite, titleColor:"#8B60D3"},
    ];
  return (

<OurWorksContainer>
    <OurWorksTitle>Our works</OurWorksTitle>
        <OurWorksSquare>
        {ourWorksData.map((ourwork, index) => (
        <OurWork key={index} title={ourwork.title} description={ourwork.description} titleColor={ourwork.titleColor}>
          <OurWorkImg src={ourwork.image} alt={ourwork.title + "Picture"} />
        </OurWork>
      ))}
        </OurWorksSquare>

<OurWorksText>
    <Thumb>
      <img src={LeftThumb} alt="Left Thumb" />
    </Thumb>

    <Paragraph>Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
    </Paragraph>

    <Thumb>
      <img src={RightThumb} alt="Right Thumb" />
    </Thumb>
</OurWorksText>

 </OurWorksContainer>
  )
}

export default OurWorks