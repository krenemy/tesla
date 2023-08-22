import React from 'react';
import styled from "styled-components";
import Section from './section';
import Header from './Header';
const Home = () => {
    return (
        <Container>
            <Header/>
            <Section 
            title = "Model-s"
            description="orderrr olines"
            backgroundImg='/images/model-3.jpg'
            leftBtnText="custom oeder"
            rightBtnText="inventor uyyr"
            />
            <Section 
            title = "Model-3"
            description="orderrr olines"
            backgreoundImg=""
            leftBtnText="cuseeeeeetom oeder"
            rightBtnText="inventor uyyr"
            />
            <Section 
            title = "Model-r"
            description="sdsrrr olines"
            backgreoundImg=""
            leftBtnText="cussseeededwewom oeder"
            rightBtnText="inventoeeeeeeeeer uyyr"
            />
            <Section 
            title = "conaatata"
            description="sdsrrr olines"
            backgreoundImg=""
            leftBtnText="cussseeededwewom oeder"
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    width: 100 vw;
    height: 100vh;`