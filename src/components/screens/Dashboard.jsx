import styled from 'styled-components';

export default function Dashboard() {
    return (
        <Body>
            <Title>
                Dashboard
            </Title>
        </Body>
    )
}
const Body = styled.div`
    margin: 0 auto;
    text-align: center;
    transform: translateY(40vh);
    width: 70%;
`;
const Title = styled.h3`
    padding: 12px;
    font-size: 50px;
    border: 1px solid #008000;
    border-radius: 12px;
`;