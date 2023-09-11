import React from 'react';
import { NavigationContainer, Logo, ButtonsContainer, Button } from '../../ui/Navigation/NavigationUi';

const Navigation = () => {
  const buttonsData = [
    { label: 'Startups', link: '/startups' },
    { label: 'Contact', link: '/contact' },
    { label: 'Work with us!', link: '/work' },
  ];

  return (
    <NavigationContainer>
      <Logo>
        <img src="./assets/Logo/logo.svg" alt="Company logo" />
      </Logo>

      <ButtonsContainer>
        {buttonsData.map((button, index) => (
          <Button key={index} to={button.link}>
            {button.label}
          </Button>
        ))}
      </ButtonsContainer>
    </NavigationContainer>
  );
};

export default Navigation;
