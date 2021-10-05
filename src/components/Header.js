import React from 'react'
import './Header.css'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Header() {
    const [user] = useAuthState(auth)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    alt={user?.displayName}
                    src={user?.photoURL}
                    onClick={() => auth.signOut()}
                />
                <AccessTime />
            </HeaderLeft>
            <HeaderSearch>
                <Search />
                <input type="text" placeholder="Search" />
            </HeaderSearch>
            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderRight = styled.div`
    flex: .3;
    display: flex;
    align-items: flex-end;
    >.MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`

const HeaderSearch = styled.div`
    flex: .4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;
    >input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: .3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    >.MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: .8;
    }
`

