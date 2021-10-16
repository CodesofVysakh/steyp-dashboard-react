import styled from 'styled-components';
import Round from '../../assets/icons/round.svg';
import Locked from '../../assets/icons/locked.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Login() {
    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

    return (
        <Content>
            <Container>
                <Image src={Round} alt="Round" />
            </Container>
            <Title>
                Enter Password
            </Title>
            <Description>
                Enter your password to login
            </Description>
            <Block>
                <Form>
                    <PhoneIcon src={Locked} alt="Icon" />
                    <Input type="password" placeholder="Password" required />
                    <Span>Login with OTP</Span>
                    <Link to="/password">
                        <Button type="submit" value="Submit"  />
                    </Link>
                </Form>
            </Block>
        </Content>
    )
}
const Content = styled.div`
    padding: 150px 0;
    width: 50%;
    margin: 0 auto;
`;
const Container = styled.div`
    width: 20px;
    margin-bottom: 10px;
`;
const Image = styled.img``;
const Title = styled.h3`
    font-size: 26px;
    margin-bottom: 15px;
    font-weight: 600;
`;
const Description = styled.p`
    margin-bottom: 25px;
    font-weight: 600;
    color: #818181;
`;
const Block = styled.div``;
const Form = styled.form`
    position: relative;
`;
const PhoneIcon = styled.img`
    width: 12px;
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 16px;
`;
const Input = styled.input`
    border: 1px solid #000;
    padding: 16px 36px;
    border-radius: 8px;
    display: block;
    width: 100%;
    margin-bottom: 8px;
    &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{
        -webkit-appearance: none;
        -moz-appearance: textfield;

    }
`;
const Span = styled.span`
    color: #677af5;
    font-size: 16px;
    display: block;
    text-align: right;
    margin-bottom: 30px;
    font-weight: 600;
    cursor: pointer;
`;
const Button = styled.input`
    display: block;
    padding: 16px;
    width: 100%;
    background-color: #2ac870;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
`;
