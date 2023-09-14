import React from 'react'
import Rocket from '../../assets/FormMessage/Rocket.png';
import { FormMessageContainer, FormMessageParagraph, FormMessageText, FormMessageTitle, FormMessageWrapper, FormGroup, Input, TextArea, Form, Button, ImgContainer, FormMessageImg } from '../../ui/FormMessage/FormMessageUi';


const FormMessage = () => {
  return (
    <FormMessageContainer className='form-message-container'>
       <FormMessageText>
        <FormMessageTitle>
            Are you ready<br></br>to board this rocket ship?
        </FormMessageTitle>
        <FormMessageParagraph>
            Share your excitement with us.
        </FormMessageParagraph>

        <FormMessageWrapper>
        <Form>
        <FormGroup>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder='Name*'
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder='Email*'
            required
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            id="message"
            name="message"
            placeholder='Message*'
            required
          />
        </FormGroup>
        <Button type="submit">Shoot us a message</Button>
      </Form>
        </FormMessageWrapper>
      </FormMessageText>
 
      
        <ImgContainer><FormMessageImg src={Rocket} alt="RocketPicture" /></ImgContainer>
    </FormMessageContainer>
  )
}

export default FormMessage