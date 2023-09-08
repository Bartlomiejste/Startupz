import { NavigationContainer, Logo, ButtonsContainer, Button } from "../../ui/NavigationUI/NavigationUI";

const Navigation = () => {
  return (
    <NavigationContainer>
 
      <Logo>
        <img src="./assets/logo.png" alt="Company logo" />
      </Logo>

      <ButtonsContainer>
        <Button>Startups</Button>
        <Button>Contact</Button>
        <Button>Work with us!</Button>
      </ButtonsContainer>

    </NavigationContainer>
  );
};

export default Navigation;
