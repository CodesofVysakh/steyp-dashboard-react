import styled from 'styled-components';
import Round from '../../assets/icons/round.svg';
import Phone from '../../assets/icons/phone.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function PasswordReset() {
    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

    return (
        <Content>
            <Container>
                <Image src={Round} alt="Round" />
            </Container>
            <Title>
                Password Reset Setup(1/3)
            </Title>
            <Description>
                Enter your your registered phone number to reset your password
            </Description>
            <Block>
                <Form>
                    <PhoneIcon src={Phone} alt="Icon" />
                    <Input type="number" placeholder="Phone Number" required onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} required />
                    <Link to="/passwordreset">
                        <Button type="submit" value="Send OTP"  />
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
    margin-bottom: 50px;
    &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{
        -webkit-appearance: none;
        -moz-appearance: textfield;

    }
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
