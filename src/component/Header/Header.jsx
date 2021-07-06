import React from 'react';
import { Container, A, B, P, T, AF, E, AG, AB, AC, AD, Logo, Box, Wrapper,  } from './StyleHeader';

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Logo>LOGO</Logo>
                <Box>
                    <AB>
                        ABOUT
                        <B>
                            <T>About us</T>
                            <P>Board of trustess</P>
                            <P>Leadership</P>
                            <P>Staff</P>
                            <P>Career opportunities</P>
                            <E>Working at lesson</E>
                        </B>
                    </AB>
                    <AC>
                        INSTRUCTION
                        <B>
                            <T>About us</T>
                            <P>Board of trustess</P>
                            <P>Leadership</P>
                            <E>Working at lesson</E>
                        </B>
                    </AC>
                    <AD>
                        RESOURCES
                        <B>
                            <T>About us</T>
                            <E>Working at lesson</E>
                        </B>
                    </AD>
                    <AF>EVENTS</AF>
                    <AG>ENROL</AG>
                    <A>CONTACT</A>
                </Box>
            </Container>
        </Wrapper>
    )
}
