
import React from "react";
import axios from "axios"
import styled from "styled-components"




const StyledBody = styled.div`
background-color:${props => props.theme.black};
padding:${props => props.theme.paddingSmall};
display:flex;
flex-wrap:wrap;
img{
    width:50%;
    padding:${props => props.theme.paddingMedium};
    
}
p{
    width:40%;
    padding:${props => props.theme.paddingMedium};
    font-size:${props => props.theme.fontSize};
    color:${props => props.theme.secondaryColor};
}
@media(max-width:1090px){
img{
    width:45%;
}
p{
    width:40%;
}
}
@media(max-width:900px){
    display:flex;
    flex-direction:column;
    img{
    width:93%;
}
p{
    width:90%;
}  
}
`


export default function Body(props) {
    const {image} = props


    return (
        <StyledBody className = 'body'>
            <img src={image.url} alt=''/>
                <p>{image.explanation}</p>
                
        </StyledBody>
    )
}
