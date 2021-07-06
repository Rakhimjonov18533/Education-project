import React from 'react';
import {Container, Logo, Input, Button, Div, Top} from './StyleBottom';
import {FiInstagram} from 'react-icons/fi';
import {AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai';

const Bottom = () => {
    return (
        <Container>
            <Top>Subscribe To Our Newsletter</Top>
            <Div>
                <Input placeholder='   Enter your e-email adress' />
                <Button>Submit</Button>
            </Div>
            <Logo>
                <FiInstagram style={{marginLeft:"20px", cursor: 'pointer'}}  color='white'/>
                <AiFillTwitterSquare style={{cursor: 'pointer', marginLeft: "20px"}} color='white'/>
                <AiFillFacebook style={{cursor: 'pointer', marginLeft: "20px"}} color='white'/>
                <AiFillLinkedin style={{cursor: 'pointer', marginLeft: "20px"}} color='white'/>
            </Logo>
        </Container>
    )
}

export default Bottom
