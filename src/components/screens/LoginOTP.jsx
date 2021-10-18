import styled from 'styled-components';
import Round from '../../assets/icons/round.svg';
import Phone from '../../assets/icons/phone.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function LoginOTP() {
    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
    const [counter, setCounter] = useState(30);
    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const resetCounter = () => {
       return setCounter(30);
    }
    return (
        <Content>
            <Container>
                <Image src={Round} alt="Round" />
            </Container>
            <Title>
                Enter OTP sent to your number
            </Title>
            <Description>
                The recovery code was sent to your phone number. <br /> Please enter the code
            </Description>
            <Block>
                <Form>
                    <PhoneIcon src={Phone} alt="Icon" />
                    <Input type="number" placeholder="Enter OTP" onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()} required />
                    <Span onClick={counter === 0 ? resetCounter : "" } counter={counter} >Resend OTP <Wrap counter={counter}>in {counter}</Wrap></Span>
                    <Link to="/password">
                        <Button type="submit" value="Verify"  />
                    </Link>
                    <Link to="/password">
                        <LoginSpan>Login with Password</LoginSpan>
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
    margin-bottom: 10px;
    &::-webkit-inner-spin-button,&::-webkit-outer-spin-button{
        -webkit-appearance: none;
        -moz-appearance: textfield;

    }
`;
const Span = styled.div`
    color: ${({counter}) => (counter === 0 ? '#f00' : '#818181' )};
    font-size: 16px;
    font-weight: 600;
    display: block;
    text-align: right;
    margin-bottom: 30px !important;
    cursor: pointer;
    text-decoration: ${({counter}) => (counter === 0 ? 'underline' : 'none' )};;
`;
const Wrap = styled.div`
    display: ${({counter}) => (counter === 0 ? 'none' : 'inline-block' )};
    color: #818181;
    font-size: 16px;
    font-weight: 600;
`;
const Button = styled.input`
    display: block;
    padding: 16px;
    width: 100%;
    background-color: #2ac870;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 30px;
    cursor: pointer;
`;
const LoginSpan = styled.span`
    color: #677af5;
    font-size: 16px;
    display: block;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 600;
    cursor: pointer;
`;