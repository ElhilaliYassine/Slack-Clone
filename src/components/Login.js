import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login() {
    const signIn = e => {
        e.preventDefault()
        auth.signInWithPopup(provider)
            .then(() => {})
            .catch(err => alert(err))
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://www.techrepublic.com/a/hub/i/r/2016/05/17/e5a3713d-ac86-4b59-ac69-4bf2118eaec9/resize/1200x900/94015216f0a729fd4e372588bc358029/slackmarkweb.png" alt="" />
                <h1>Sign in the hub</h1>
                <p>justanotherhub.slack.com</p>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    >img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    >button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
    }
`