import React from "react";
import axios from "axios"
import styled from "styled-components"

const StyledHeader = styled.div`
background-color:${props => props.theme.black};
color: ${props => props.theme.primaryColor};
border: 5px dashed ${props => props.theme.tertiaryColor};
h1{
    display:flex;
    justify-content:flex-start;
    margin:${props => props.theme.margins.small};
}
h3{
    display:flex;
    justify-content:flex-end;
    margin:${props => props.theme.margins.small};
}
`


export default function Header(props) {
    const {imageInfo} = props


    return (
        <StyledHeader className = 'header'>
            <h1>NASA Photo of the Day</h1>
                <h2>{imageInfo.title}</h2>
                    <h3>{imageInfo.date}</h3>
        </StyledHeader>
    )
}