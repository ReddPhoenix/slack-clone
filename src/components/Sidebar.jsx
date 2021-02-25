// import { Container } from '@material-ui/core'
import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    User Coder
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                <MainChannelItem>
                    <AddCircleOutlineIcon />
                    Add
                </MainChannelItem>
            </MainChannels>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    background: #3F0E40;
    `
    
    const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;

`

const Name = styled.div`

`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`

`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
`