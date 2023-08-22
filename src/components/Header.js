import React from 'react';
import styled from 'styled-components'
const Header = () => {
    return (
        <Container>
            <a>
                <img src = "#"></img>
            </a>
            <Menu>
                <p>
                    <a href="#">MOdel s </a>
                </p>
                <p>
                    <a href="#">MOdel 3</a>
                </p>
                <p>
                    <a href="#">MOdel x </a>
                </p>
                <p>
                    <a href="#">MOdel y </a>
                </p>
            </Menu>
            <RMenu>
                    <a href="#">shpop </a>
                    <a href="#">acc telsa</a>
               
            </RMenu>
        </Container>
    );
}

export default Header;
const Container = styled.div`
    min-height:60px;
    position:fixed;
    display: flex;
    align-items:center;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
`
const Menu = styled.div`
    display:flex;
    align-items: center;
    flex:1;
    justify-content: center;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:no wrap;
    }
`
const RMenu = styled.div`
a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
        flex-wrap:no wrap;
    }
    `