import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();

  const handleSignin = (event) => {
    event.preventDefault();
    history.push(ROUTES.BROWSE);
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>

          <Form.Base onSubmit={handleSignin}>
            <Form.Input placeholder="Email address" />
            <Form.Input type="password" autoComplete="off" placeholder="Password" />
            <Form.Submit type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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
