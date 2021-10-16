import React from 'react';
import styled from 'styled-components';
import SpotImage from '../../assets/images/SpotlightBackground.png';
import Logo from '../../assets/images/steyp-logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Password from './Password';


export default function Main() {
    return (
        <Router>
            <MainBlock>
                <Left>
                    <LogoContainer>
                        <LogoImage src={Logo} alt="Logo" />
                    </LogoContainer>
                </Left>
                <Right>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/password" component={Password} />
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
`;