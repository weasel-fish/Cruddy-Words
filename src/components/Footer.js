import styled from "styled-components"

const FootStyle = styled.div`
    position: fixed;
    font-family: 'Lato', sans-serif;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: lightgray;
    color: black;
    text-align: center;
`

function Footer() {
    return (
        <FootStyle>
            <p>This is a React Project by Adrienne Paquin and Kyle Ermentrout</p>
        </FootStyle>
    )
}

export default Footer