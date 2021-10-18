import React from 'react';
import styled from 'styled-components';
import SpotImage from '../../assets/images/SpotlightBackground.png';
import Logo from '../../assets/images/steyp-logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Password from './Password';
import PasswordReset from './PasswordReset';
import PasswordReset2 from './PasswordReset2';
import LoginOTP from './LoginOTP';
import PasswordValidation from './PasswordValidation';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Name from './Name';
import Referal from './Referal';
import CreatePassword from './CreatePassword';
import { Link } from 'react-router-dom';



export default function Main() {
    return (
        <Router>
            <MainBlock>
                <Left>
                    <Link to="/">
                        <LogoContainer>
                            <LogoImage src={Logo} alt="Logo" />
                        </LogoContainer>
                    </Link>
                </Left>
                <Right>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/password" component={Password} />
                        <Route path="/otplogin" component={LoginOTP} />
                        <Route path="/forgotpassword" component={PasswordReset} />
                        <Route path="/passwordreset" component={PasswordReset2} />
                        <Route path="/passwordvalidation" component={PasswordValidation} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/name" component={Name} />
                        <Route path="/referal" component={Referal} />
                        <Route path="/createpassword" component={CreatePassword} />

                    </Switch>
                </Right>
            </MainBlock>
        </Router>
    )
}
const MainBlock = styled.div`
    background: #faf8fd;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    background: url(${SpotImage});
    background-size: cover;
    width: 50%;
    height: 100vh;
`;
const LogoContainer = styled.div`
    width: 100px;
    position: fixed;
    top: 40px;
    left: 40px;
    cursor: pointer;
`;
const LogoImage = styled.img``;
const Right = styled.div`
    width: 50%;
    background: #fff;
    height: 100vh;
`;