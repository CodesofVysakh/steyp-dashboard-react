import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Round from '../../assets/icons/round.svg';
import Locked from '../../assets/icons/locked.svg';
import Eye from '../../assets/icons/eye.svg';
import Hide from '../../assets/icons/hide.svg';
import Tick from '../../assets/icons/tick.svg';
import Wrong from '../../assets/icons/wrong.svg';
import Empty from '../../assets/icons/empty.svg';
import Success from '../../assets/icons/success.svg';
import { Link } from 'react-router-dom';

export default function PasswordValidation() {
    const [isLoad, setLoad] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const toggle = () => {
        setLoad(!isLoad);
    } 
    const usePasswordValidation = ({ firstPassword = "", secondPassword = "", requiredLength = 8, }) => {
        const [validLength, setValidLength] = useState(null);
        const [hasNumber, setHasNumber] = useState(null);
        const [upperCase, setUpperCase] = useState(null);
        const [lowerCase, setLowerCase] = useState(null);
        const [specialChar, setSpecialChar] = useState(null);
        const [match, setMatch] = useState(null);
        
          useEffect(() => {
            setValidLength(firstPassword.length >= requiredLength ? true : false);
            setUpperCase(firstPassword.toLowerCase() !== firstPassword);
            setLowerCase(firstPassword.toUpperCase() !== firstPassword);
            setHasNumber(/\d/.test(firstPassword));
            setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
            setMatch(firstPassword && firstPassword === secondPassword);
              
            }, [firstPassword, secondPassword, requiredLength]);
          
          return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
    }
    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
       });
        
    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
    ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        secondPassword: password.secondPassword,
    });

    const showModal = (e) => {
        e.preventDefault();
        console.log("Modal");
		if (
			validLength &&
			hasNumber &&
			upperCase &&
			lowerCase &&
			match
		) {
			setIsModal(true)
		}
	}
    
    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
    };
    const setSecond = (event) => {
        setPassword({ ...password, secondPassword: event.target.value });
    };
    return (
        <Content>
            <Container>
                <Image src={Round} alt="Round" />
            </Container>
            <Title>
                Password Reset Setup(3/3)
            </Title>
            <Description>
                The recovery code was sent to your phone number. <br /> Please enter the code
            </Description>
            <Block>
                <Form>
                    <PhoneIcon src={ Locked } alt="Icon" />
                    <Input type={ isLoad ? "password" : "text" } onChange={setFirst} placeholder="Password" required />
                    <EyeIcon src={ isLoad ? Eye : Hide } onClick={toggle} alt="Icon" />
                    <PhoneIcon2 src={ Locked } alt="Icon" />
                    <Input type={ isLoad ? "password" : "text" } onChange={setSecond} placeholder="Password" required />
                    <EyeIcon2 src={ isLoad ? Eye : Hide } onClick={toggle} alt="Icon" />
                    <Message>
                        <UnorderedList>
                            <List className="match" match={match} >
                                <CheckImage src={ match ? Tick : Wrong } alt="Check" />
                                {match ? <Span>Password Matches</Span> : <Span>Password does not Match</Span>}</List>
                            <List className="validLength" validLength={validLength} >
                                <CheckImage src={ validLength ? Tick : Wrong } alt="Check" />
                                <Paragraph>Contains at least 8 characters</Paragraph>
                            </List>
                            <List className="lowerCase" lowerCase={lowerCase} >
                                <CheckImage src={ lowerCase ? Tick : Wrong } alt="Check" />
                                <Paragraph>Contains a small letter (a-z)</Paragraph>
                            </List>
                            <List className="upperCase" upperCase={upperCase} >
                                <CheckImage src={ upperCase ? Tick : Wrong } alt="Check" />
                                <Paragraph>Contains a Capital letter (A-Z)</Paragraph>
                            </List>
                            <List className="hasNumber" hasNumber={hasNumber} >
                                <CheckImage src={ hasNumber ? Tick : Wrong } alt="Check" />
                                <Paragraph>Contains at least one number (0-9)</Paragraph>
                            </List>
                            <List className="specialChar" specialChar={specialChar}>
                                <CheckImage src={ specialChar ? Tick : Empty } alt="Check" />
                                <Paragraph>Containes at least one symbol (#,*,@,!,$, etc) {" "}</Paragraph>
                            </List>
                        </UnorderedList>
                    </Message>
                    <ButtonContainer>
                        <Button type="submit" value="Reset" onClick={showModal} />
                    </ButtonContainer>
                </Form>
            </Block>

            {/* Success Page */}
            <Overlay isModal={isModal}>
                <OverlayBlock>
                    <CheckedDiv>
                        <Checked src={Success} alt="Check" /> 
                    </CheckedDiv>
                    <SuccessTitle>Success</SuccessTitle>
                    <OverlayParagraph>Your password has been reset successfully</OverlayParagraph>
                    <Link to="/">
                        <OverlayLogin>Login</OverlayLogin>
                    </Link>
                </OverlayBlock>
            </Overlay>
        </Content>

)
}
const Content = styled.div`
    padding: 100px 0;
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
const PhoneIcon2 = styled.img`
    width: 12px;
    display: inline-block;
    position: absolute;
    top: 83px;
    left: 16px;
`;
const EyeIcon = styled.img`
    width: 18px;
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 16px;
    cursor: pointer;
`;
const EyeIcon2 = styled.img`
    width: 18px;
    display: inline-block;
    position: absolute;
    top: 83px;
    right: 16px;
    cursor: pointer;
`;
const Paragraph = styled.p``;
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
const Message = styled.div``;
const UnorderedList = styled.ul``;
const List = styled.li`
    display: flex;
    align-items: center;
    &.match {
        color: ${({match}) => (match ? 'green' : 'red')};
    }
    &.validLength {
        color: ${({validLength}) => (validLength ? 'green' : 'red')};
    }
    &.lowerCase {
        color: ${({lowerCase}) => (lowerCase ? 'green' : 'red')};
    }
    &.upperCase {
        color: ${({upperCase}) => (upperCase ? 'green' : 'red')};
    }
    &.hasNumber {
        color: ${({hasNumber}) => (hasNumber ? 'green' : 'red')};
    }
    &.specialChar {
        color: ${({specialChar}) => (specialChar ? 'green' : '#000')};
    }
`;
const CheckImage = styled.img`
    width: 18px;
    margin-right: 10px;
`;
const Span = styled.span``;
const Button = styled.input`
    display: block;
    padding: 16px;
    width: 100%;
    background-color: #2ac870;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 15px;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    
`;
const Overlay = styled.div`
    background: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    /* display: flex; */
    align-items: center;
    display: ${({isModal}) => (isModal ? 'flex' : 'none')};
`;
const OverlayBlock = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 80px 30px 30px;
    margin: 0 auto;
    position: relative;
`;
const SuccessTitle = styled.h6`
    text-align: center;
    font-size: 25px;
`;
const OverlayParagraph = styled.p`
    margin-bottom: 20px;
`;
const OverlayLogin = styled.button`
    background: #2ac870;
    padding: 12px;
    width: 100%;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
`;
const CheckedDiv = styled.div`
    width: 100px;
    background: #fff;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 1px 1px 20px #818181;
    position: absolute;
    top: -50px;
    left: 0;
    transform: translateX(120px);

`;
const Checked = styled.img`

`;
