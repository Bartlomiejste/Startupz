import React from "react";
import Step from "../../utils/Step/Step";
import Bulb from "../../assets/Values/Bulb.png";
import {
  ImgBulb,
  ValuesContainer,
  ValuesImg,
  ValuesSteps,
  ValuesText,
  ValuesTitle,
} from "../../ui/Values/Values.styled.jsx";

export const Values = () => {

  const stepsData = [
    {
      title: "01. Innovation",
      description:
        "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
      customWidth: "",
      customPadding: "",
    },
    {
      title: "02. People",
      description: "Talent is what enable us to create great companies.",
      customWidth: "351px",
      customPadding: "",
    },
  ];

  return (
    <ValuesContainer>
      <ValuesText>
        <ValuesTitle>Our core values</ValuesTitle>
        <ValuesImg>
          <ImgBulb src={Bulb} alt="Bulb" />
        </ValuesImg>
      </ValuesText>
      <ValuesSteps>
        {stepsData.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            customWidth={step.customWidth}
            customPadding={step.customPadding}
            dangerouslySetInnerHTML={{ __html: step.description }}
          />
        ))}
      </ValuesSteps>
    </ValuesContainer>
  );
};
