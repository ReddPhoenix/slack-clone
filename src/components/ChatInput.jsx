import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type='text' placeholder='Enter message...' />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 2px solid #8D8D8E;
    border-radius: 5px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 100%;
            border: none;
            font-size: 13px;
        }

        input: focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #007a5A;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    :hover {
        background: #148567;
    }

    .MuiSvgIcon-root {
        width: 18px;
    }


`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`