import styled from 'styled-components';
import Round from '../../assets/icons/round.svg';
import Person from '../../assets/icons/person.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Name() {
    const [isLoad, setLoad] = useState(false);

    const toggle = () => {
        setLoad(!isLoad);
    } 

    return (
        <Content>
            <Container>
                <Image src={Round} alt="Round" />
            </Container>
            <Title>
                Enter your name
            </Title>
            <Description>
                We can provide you the certificate with the entered name
            </Description>
            <Block>
                <Form>
                    <PersonIcon src={ Person } onClick={toggle} alt="Icon" />
                    <Input type={ isLoad ? "password" : "text" } placeholder="Enter your name" required />
                    <Link to="/otplogin">
                        <Span>Login with OTP</Span>
                    </Link>
                    <Link to="/referal">
                        <Button type="submit" value="Continue"  />
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
    text-align: right;
`;
const PersonIcon = styled.img`
    width: 16px;
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 14px;
`;
const Input = styled.input`
    border: 1px solid #000;
    padding: 16px 40px;
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
    display: inline-block;
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
