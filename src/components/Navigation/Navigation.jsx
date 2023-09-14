import React from 'react';
import { NavigationContainer, LogoContainer, ButtonsContainer, Button, LogoImg } from '../../ui/Navigation/NavigationUi';
import Logos from '../../assets/Logo/Logo.png';

const Navigation = () => {

  const handleContact = () => {
    window.scroll({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
  };

  const handleWorkWithUs = () => {
    const formMessageElement = document.querySelector('.form-message-container');

    if (formMessageElement) {
      formMessageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLinkedInPage = () => {
    window.open('https://www.linkedin.com/company/startupz.com/', '_blank');
  };

  const buttonsData = [
    { label: 'Startups', onClick: openLinkedInPage },
    { label: 'Contact', link: '/contact', onClick: handleContact },
    { label: 'Work with us!', link: '/work', onClick: handleWorkWithUs }, 
  ];

  return (
    <NavigationContainer>
      <LogoContainer>
        <LogoImg src={Logos} alt="Company Logo" />
      </LogoContainer>

      <ButtonsContainer>
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            to={button.link}
            onClick={button.onClick || null}
            target={button.external ? '_blank' : null}
            rel={button.external ? 'noopener noreferrer' : null}
          >
            {button.label}
          </Button>
        ))}
      </ButtonsContainer>
    </NavigationContainer>
  );
};

export default Navigation;
