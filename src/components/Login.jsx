import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
            
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <Container>
            <Content>
                <SlackImg src='https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png' />
                <h1>Sign in to Slack</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign In with Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlackImg = styled.img`
    height: 100px;

`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8D48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
`