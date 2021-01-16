import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();

  const handleSignup = (event) => {
    event.preventDefault();

    history.push(ROUTES.BROWSE);
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>

          <Form.Base onSubmit={handleSignup}>
            <Form.Input placeholder="First name" />
            <Form.Input placeholder="Email address" />
            <Form.Input type="password" autoComplete="off" placeholder="Password" />
            <Form.Submit type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
